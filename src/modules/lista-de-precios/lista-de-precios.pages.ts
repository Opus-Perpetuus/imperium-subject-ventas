import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-ventas";

export const lista_de_precios_pages: KirletPageDecl[] = [
  {
    id: "ventas.lista-de-precios",
    path: "lista-de-precios",
    permission: "subject.ventas.lista-de-precios.read",
    build: () =>
      build_feature_shell_page({
        id: "ventas.lista-de-precios",
        owner: "subject-ventas",
        title: "Lista de precios",
        props: {
          basePath: "lista-de-precios",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Lista de precios",
            subtitle: "Submenú de ventas",
            pluralLabel: "lista de precios",
            singularLabel: "lista de precios",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/lista-de-precios`,
            record: `${API}/lista-de-precios/:id`,
            create: { method: "POST", action: `${API}/lista-de-precios` },
            update: { method: "PATCH", action: `${API}/lista-de-precios/:id` },
            delete: { method: "DELETE", action: `${API}/lista-de-precios/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "product", label: "product", sortable: true, priority: 3 },
              { key: "iva", label: "iva", sortable: true, priority: 3 },
              { key: "descripcion", label: "descripcion", sortable: true, priority: 3 },
              { key: "precio", label: "precio", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "product", component: "input-text", label: "product" },
              { name: "iva", component: "input-text", label: "iva" },
              { name: "descripcion", component: "input-text", label: "descripcion" },
              { name: "precio", component: "input-number", label: "precio" },
            ],
          },
        },
      }),
  },
];
