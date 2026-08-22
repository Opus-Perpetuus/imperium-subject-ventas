import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { sku_pages } from "./sku.pages.ts";
import { sku_tables } from "./sku.tables.ts";

export const sku_module = define_module({
  resource: "sku",
  labels: {
    singular: "Productos",
    plural: "Productos",
    read: "Ver Productos",
    write: "Editar Productos",
  },
  routes: define_crud({
    resource: "sku",
    table: "sku",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "sku",
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
      puedoProducirlo: { type: "boolean" },
      puedoComprarlo: { type: "boolean" },
      puedoVenderlo: { type: "boolean" },
      codigo: { type: "string", search: true },
      unidad: { type: "string", search: true },
      existencia: { type: "number" },
      costoVenta: { type: "number" },
      stockMinimo: { type: "number" },
      stockMaximo: { type: "string", search: true },
      etiquetas: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: sku_tables,
  pages: sku_pages,
  menu: [],
});
