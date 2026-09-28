import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-ventas";

export const purchase_request_pages: KirletPageDecl[] = [
  {
    id: "ventas.purchase-request",
    path: "purchase-request",
    permission: "subject.ventas.purchase-request.read",
    build: () =>
      build_feature_shell_page({
        id: "ventas.purchase-request",
        owner: "subject-ventas",
        title: "Solicitudes de compra",
        props: {
          basePath: "purchase-request",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Solicitudes de compra",
            subtitle: "Submenú de ventas",
            pluralLabel: "solicitudes de compra",
            singularLabel: "solicitud de compra",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/purchase-request`,
            record: `${API}/purchase-request/:id`,
            create: { method: "POST", action: `${API}/purchase-request` },
            update: { method: "PATCH", action: `${API}/purchase-request/:id` },
            delete: { method: "DELETE", action: `${API}/purchase-request/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "folio", label: "folio", sortable: true, priority: 3 },
              { key: "solicitante", label: "solicitante", sortable: true, priority: 3 },
              { key: "solicitante_nombre", label: "solicitante nombre", sortable: true, priority: 3 },
              { key: "departamento", label: "departamento", sortable: true, priority: 3 },
              { key: "fecha_requerida", label: "fecha requerida", sortable: true, priority: 3 },
              { key: "estado", label: "estado", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-textarea", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "folio", component: "input-number", label: "folio" },
              { name: "solicitante", component: "input-text", label: "solicitante" },
              { name: "solicitante_nombre", component: "input-text", label: "solicitante nombre" },
              { name: "departamento", component: "input-text", label: "departamento" },
              { name: "fecha_requerida", component: "input-text", label: "fecha requerida" },
              { name: "estado", component: "input-text", label: "estado" },
              { name: "total_estimado", component: "input-number", label: "total estimado" },
              { name: "aprobado_por", component: "input-text", label: "aprobado por" },
              { name: "aprobado_por_nombre", component: "input-text", label: "aprobado por nombre" },
              { name: "fecha_aprobacion", component: "input-text", label: "fecha aprobacion" },
              { name: "motivo_rechazo", component: "input-text", label: "motivo rechazo" },
              { name: "ordenes_compra", component: "input-json", label: "ordenes compra" },
              { name: "articulos", component: "input-json", label: "articulos" },
            ],
          },
        },
      }),
  },
];
