import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-ventas";

export const pedidos_pages: KirletPageDecl[] = [
  {
    id: "ventas.pedidos",
    path: "pedidos",
    permission: "subject.ventas.pedidos.read",
    build: () =>
      build_feature_shell_page({
        id: "ventas.pedidos",
        owner: "subject-ventas",
        title: "Pedidos",
        props: {
          basePath: "pedidos",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Pedidos",
            subtitle: "Submenú de ventas",
            pluralLabel: "pedidos",
            singularLabel: "pedidos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/pedidos`,
            record: `${API}/pedidos/:id`,
            create: { method: "POST", action: `${API}/pedidos` },
            update: { method: "PATCH", action: `${API}/pedidos/:id` },
            delete: { method: "DELETE", action: `${API}/pedidos/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "folio_interno", label: "folio interno", sortable: true, priority: 3 },
              { key: "fecha", label: "fecha", sortable: true, priority: 3 },
              { key: "contacto", label: "contacto", sortable: true, priority: 3 },
              { key: "contacto_id", label: "contacto id", sortable: true, priority: 3 },
              { key: "usuario", label: "usuario", sortable: true, priority: 3 },
              { key: "estado", label: "estado", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "folio_interno", component: "input-text", label: "folio interno" },
              { name: "fecha", component: "input-text", label: "fecha" },
              { name: "contacto", component: "input-text", label: "contacto" },
              { name: "contacto_id", component: "input-text", label: "contacto id" },
              { name: "usuario", component: "input-text", label: "usuario" },
              { name: "estado", component: "input-text", label: "estado" },
              { name: "total", component: "input-text", label: "total" },
              { name: "iva", component: "input-text", label: "iva" },
              { name: "importe", component: "input-number", label: "importe" },
              { name: "folio", component: "input-text", label: "folio" },
              { name: "assigned_employee", component: "input-text", label: "assigned employee" },
              { name: "init_time", component: "input-text", label: "init time" },
              { name: "end_time", component: "input-text", label: "end time" },
              { name: "sincronizado", component: "input-checkbox", label: "sincronizado" },
              { name: "invoice_request_id", component: "input-text", label: "invoice request id" },
              { name: "invoice_request_name", component: "input-text", label: "invoice request name" },
              { name: "invoice_request_estado", component: "input-text", label: "invoice request estado" },
              { name: "invoice_request_monto_total", component: "input-text", label: "invoice request monto total" },
              { name: "invoice_request_actualizado", component: "input-text", label: "invoice request actualizado" },
              { name: "ruta", component: "input-text", label: "ruta" },
              { name: "cantidad", component: "input-number", label: "cantidad" },
              { name: "cantidad_surtida", component: "input-number", label: "cantidad surtida" },
              { name: "precio", component: "input-number", label: "precio" },
              { name: "product", component: "input-text", label: "product" },
              { name: "price_origin", component: "input-text", label: "price origin" },
              { name: "listaDePreciosId", component: "input-text", label: "listaDePreciosId" },
              { name: "offline_uuid", component: "input-text", label: "offline uuid" },
            ],
          },
        },
      }),
  },
];
