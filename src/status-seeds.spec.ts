import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import {
  PEDIDOS_ESTADO_OPTIONS,
  PURCHASE_ORDER_ESTADO_OPTIONS,
  push_status_seeds,
  STATUS_OPTION_SEED_PATH,
  STATUS_OPTION_SEEDS,
} from "./status-seeds";

describe("status seeds", () => {
  test("purchase-order + pedidos estado", () => {
    expect(STATUS_OPTION_SEEDS).toHaveLength(2);
    const po = STATUS_OPTION_SEEDS[0]!;
    expect(po.model_id).toBe("subject-ventas/purchase-order");
    expect(po.status_fields).toEqual(["estado"]);
    expect(po.options.map((o) => o.value)).toEqual(PURCHASE_ORDER_ESTADO_OPTIONS.map((o) => o.value));
    expect(po.options.some((o) => o.value === "archivada")).toBe(true);
    const ped = STATUS_OPTION_SEEDS[1]!;
    expect(ped.model_id).toBe("subject-ventas/pedidos");
    expect(ped.options.map((o) => o.value)).toEqual(PEDIDOS_ESTADO_OPTIONS.map((o) => o.value));
    expect(ped.options.map((o) => o.value)).toContain("surtiendo");
    expect(ped.options.map((o) => o.value)).toContain("por_surtir");
    expect(
      [...po.options, ...ped.options].every(
        (o) => /^#[0-9a-f]{6}$/.test(o.color) && /^fas fa-[a-z0-9-]+$/.test(o.icon ?? ""),
      ),
    ).toBe(true);
  });

  test("pages usan input-status sin options literales", () => {
    const po = readFileSync(new URL("./modules/purchase-order/purchase-order.pages.ts", import.meta.url), "utf8");
    expect(po).toMatch(/name:\s*"estado"/);
    expect(po).toMatch(/component:\s*"input-status"/);
    // No options literales en el bloque de estado (antes del siguiente campo).
    expect(po).toMatch(
      /name:\s*"estado",\s*component:\s*"input-status",[\s\S]*?\},\s*\{\s*name:\s*"tipo_origen"/,
    );
    expect(po).not.toMatch(/name:\s*"estado",[\s\S]*?options:\s*\[[\s\S]*?name:\s*"tipo_origen"/);
    // tipo_origen queda C técnico con options literales
    expect(po).toMatch(/name:\s*"tipo_origen"[\s\S]*?options:\s*\[/);
    const ped = readFileSync(new URL("./modules/pedidos/pedidos.pages.ts", import.meta.url), "utf8");
    expect(ped).toMatch(/name:\s*"estado"/);
    expect(ped).toMatch(/component:\s*"input-status"/);
    expect(ped).toMatch(
      /name:\s*"estado",\s*component:\s*"input-status",[\s\S]*?\},\s*\{\s*name:\s*"total"/,
    );
    expect(ped).not.toMatch(/name:\s*"estado",[\s\S]*?options:\s*\[[\s\S]*?name:\s*"total"/);
  });
});

describe("push_status_seeds", () => {
  const env = {
    CORE_DATA_URL: "http://core:3000/api/kirlets/data/x",
    SUBJECT_TECHNICAL_ID: "subject-ventas",
    CORE_SUBJECT_GATEWAY_SECRET: "s",
  };

  test("sin env no llama", async () => {
    let called = false;
    const r = await push_status_seeds({
      env: {},
      fetchImpl: (async () => {
        called = true;
        return new Response();
      }) as unknown as typeof fetch,
    });
    expect(r).toEqual({ pushed: false, reason: "core_not_configured" });
    expect(called).toBe(false);
  });

  test("POST entries a seed-defaults del núcleo", async () => {
    let url = "";
    let init: RequestInit | undefined;
    const fetchImpl = (async (u: string, i: RequestInit) => {
      url = u;
      init = i;
      return Response.json({ data: [{ inserted: 1 }] });
    }) as unknown as typeof fetch;
    const r = await push_status_seeds({ env, fetchImpl });
    expect(url).toBe(`http://core:3000${STATUS_OPTION_SEED_PATH}`);
    expect(init?.method).toBe("POST");
    const body = JSON.parse(String(init?.body));
    expect(body.entries.map((e: { model_id: string }) => e.model_id)).toEqual([
      "subject-ventas/purchase-order",
      "subject-ventas/pedidos",
    ]);
    expect(r.pushed).toBe(true);
  });

  test("rechazo del núcleo no lanza", async () => {
    const fetchImpl = (async () => Response.json({ error: "x" }, { status: 401 })) as unknown as typeof fetch;
    expect(await push_status_seeds({ env, fetchImpl })).toEqual({
      pushed: false,
      reason: "core_refused",
      status: 401,
    });
  });
});
