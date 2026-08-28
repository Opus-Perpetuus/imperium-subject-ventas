import {
  define_crud,
  define_module,
  define_routes,
} from "@opus-perpetuus/imperium-core-kit";
import { pedidos_pages } from "./pedidos.pages.ts";
import { pedidos_tables } from "./pedidos.tables.ts";

function employee_id_from_assign_body(body: unknown): string {
  if (!body || typeof body !== "object") return "";
  const row = body as Record<string, unknown>;
  const raw = row.employee_id ?? row.assigned_employee;
  if (raw && typeof raw === "object" && raw !== null && "_id" in raw) {
    return String((raw as { _id?: unknown })._id ?? "").trim();
  }
  return String(raw ?? "").trim();
}

export const pedidos_module = define_module({
  resource: "pedidos",
  labels: {
    singular: "Pedidos",
    plural: "Pedidos",
    read: "Ver Pedidos",
    write: "Editar Pedidos",
  },
  routes: [
    ...define_crud({
    resource: "pedidos",
    table: "pedidos",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "pedidos",
    fields: {
      name: { type: "string", required: true, search: true },
      description: { type: "string", search: true },
      is_active: { type: "boolean" },
      state: { type: "string" },
      ref: { type: "string", search: true },
      search_field: { type: "string", search: true },
      created_by: { type: "string" },
      custom_data: { type: "json" },
      payload: { type: "json" },
      folio_interno: { type: "string", search: true },
      fecha: { type: "string", search: true },
      contacto: { type: "string", search: true },
      contacto_id: { type: "string", search: true },
      usuario: { type: "string", search: true },
      estado: { type: "string", search: true },
      total: { type: "string", search: true },
      iva: { type: "string", search: true },
      importe: { type: "number" },
      folio: { type: "string", search: true },
      assigned_employee: { type: "string", search: true },
      init_time: { type: "string", search: true },
      end_time: { type: "string", search: true },
      sincronizado: { type: "boolean" },
      invoice_request_id: { type: "string", search: true },
      invoice_request_name: { type: "string", search: true },
      invoice_request_estado: { type: "string", search: true },
      invoice_request_monto_total: { type: "string", search: true },
      invoice_request_actualizado: { type: "string", search: true },
      ruta: { type: "string", search: true },
      cantidad: { type: "number" },
      cantidad_surtida: { type: "number" },
      precio: { type: "number" },
      product: { type: "string", search: true },
      price_origin: { type: "string", search: true },
      listaDePreciosId: { type: "string", search: true },
      offline_uuid: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
    ...define_routes({
      "POST /pedidos/:id/asignar-empleado": {
        access: "subject.ventas.pedidos.write",
        handler: async (ctx) => {
          const id = String(ctx.params.id ?? "").trim();
          if (!id) {
            return ctx.fail("validation_error", "Falta el identificador del pedido", 400);
          }
          const body = (await ctx.body<Record<string, unknown>>()) ?? {};
          const employee_id = employee_id_from_assign_body(body);
          if (!employee_id) {
            return ctx.fail("validation_error", "Falta el empleado a asignar", 400);
          }
          const current = await ctx.repo("pedidos").findById(id);
          if (!current) {
            return ctx.fail("not_found", "Pedido no encontrado", 404);
          }
          const assigned = String(current.assigned_employee ?? "").trim();
          const estado = String(current.estado ?? "");
          if (estado === "surtiendo") {
            if (assigned && assigned !== employee_id) {
              return ctx.fail(
                "conflict",
                "Este pedido ya lo está surtiendo otro empleado.",
                409,
              );
            }
            if (!assigned) {
              const updated = await ctx.data.update(
                "pedidos",
                { id },
                { assigned_employee: employee_id, init_time: current.init_time || new Date().toISOString() },
              );
              return {
                assigned_employee: employee_id,
                pedido: updated ?? { ...current, assigned_employee: employee_id },
                message: "Pedido ya asignado",
              };
            }
            return {
              assigned_employee: assigned,
              pedido: current,
              message: "Pedido ya asignado",
            };
          }
          if (estado && estado !== "por_surtir") {
            return ctx.fail(
              "conflict",
              `Este pedido no está disponible para asignar (estado: ${estado}).`,
              409,
            );
          }
          if (assigned && assigned !== employee_id) {
            return ctx.fail(
              "conflict",
              "Este pedido ya está asignado a otro empleado.",
              409,
            );
          }
          const updated = await ctx.data.update(
            "pedidos",
            { id },
            {
              estado: "surtiendo",
              assigned_employee: employee_id,
              init_time: new Date().toISOString(),
            },
          );
          return {
            assigned_employee: employee_id,
            pedido: updated ?? {
              ...current,
              estado: "surtiendo",
              assigned_employee: employee_id,
            },
            message: "Pedido asignado",
          };
        },
      },
    }),
  ],
  tables: pedidos_tables,
  pages: pedidos_pages,
  menu: [],
});
