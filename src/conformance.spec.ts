import { describe, expect, test } from "bun:test";
import {
  assert_kirlet_conformance,
  create_kirlet_test_context,
} from "@opus-perpetuus/imperium-core-kit";
import { join } from "node:path";
import { SUBJECT } from "./subject.ts";

describe("subject-ventas conformance", () => {
  test("layout + manifest", () => {
    assert_kirlet_conformance({
      definition: SUBJECT,
      src_dir: join(import.meta.dir),
    });
  });

  test("health and CRUD", async () => {
    const server = create_kirlet_test_context(SUBJECT);
    const h = await server.fetch(new Request("http://t/health"));
    expect(h.status).toBe(200);
    const c = await server.fetch(
      new Request("http://t/purchase-order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: "A" }),
      }),
    );
    expect(c.status).toBe(201);
    const menu = SUBJECT.manifest().menu ?? [];
    expect(menu.length).toBeGreaterThan(0);
    const pedido = await server.fetch(
      new Request("http://t/pedidos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: "P1", estado: "por_surtir" }),
      }),
    );
    expect(pedido.status).toBe(201);
    const created = (await pedido.json()) as { data?: { id?: string } };
    const pedido_id = created.data?.id ?? "";
    expect(pedido_id).toBeTruthy();
    const assigned = await server.fetch(
      new Request(`http://t/pedidos/${pedido_id}/asignar-empleado`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ employee_id: "emp-1" }),
      }),
    );
    expect(assigned.status).toBe(200);
    const body = (await assigned.json()) as {
      data?: { assigned_employee?: string; pedido?: { estado?: string } };
    };
    expect(body.data?.assigned_employee).toBe("emp-1");
    expect(body.data?.pedido?.estado).toBe("surtiendo");
    server.stop();
  });
});
