import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { lista_de_precios_pages } from "./lista-de-precios.pages.ts";
import { lista_de_precios_tables } from "./lista-de-precios.tables.ts";

export const lista_de_precios_module = define_module({
  resource: "lista-de-precios",
  labels: {
    singular: "Lista de precios",
    plural: "Lista de precios",
    read: "Ver Lista de precios",
    write: "Editar Lista de precios",
  },
  routes: define_crud({
    resource: "lista-de-precios",
    table: "lista_de_precios",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "lista-de",
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
      product: { type: "string", search: true },
      iva: { type: "string", search: true },
      descripcion: { type: "string", search: true },
      precio: { type: "number" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: lista_de_precios_tables,
  pages: lista_de_precios_pages,
  menu: [],
});
