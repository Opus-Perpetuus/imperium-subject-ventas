import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-ventas";

export const invoice_request_pages: KirletPageDecl[] = [
  {
    id: "ventas.invoice-request",
    path: "invoice-request",
    permission: "subject.ventas.invoice-request.read",
    build: () =>
      build_feature_shell_page({
        id: "ventas.invoice-request",
        owner: "subject-ventas",
        title: "Solicitudes de facturación",
        props: {
          basePath: "invoice-request",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Solicitudes de facturación",
            subtitle: "Submenú de ventas",
            pluralLabel: "solicitudes de facturación",
            singularLabel: "solicitudes de facturación",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/invoice-request`,
            record: `${API}/invoice-request/:id`,
            create: { method: "POST", action: `${API}/invoice-request` },
            update: { method: "PATCH", action: `${API}/invoice-request/:id` },
            delete: { method: "DELETE", action: `${API}/invoice-request/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "pedido_folio", label: "pedido folio", sortable: true, priority: 3 },
              { key: "contacto_nombre", label: "contacto nombre", sortable: true, priority: 3 },
              { key: "estado", label: "estado", sortable: true, priority: 3 },
              { key: "monto_total", label: "monto total", sortable: true, priority: 3 },
              { key: "monto_umbral", label: "monto umbral", sortable: true, priority: 3 },
              { key: "autorizado_cobranza", label: "autorizado cobranza", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "pedido_folio", component: "input-text", label: "pedido folio" },
              { name: "contacto_nombre", component: "input-text", label: "contacto nombre" },
              { name: "estado", component: "input-text", label: "estado" },
              { name: "monto_total", component: "input-number", label: "monto total" },
              { name: "monto_umbral", component: "input-number", label: "monto umbral" },
              { name: "autorizado_cobranza", component: "input-checkbox", label: "autorizado cobranza" },
              { name: "requiere_facturacion_dividida", component: "input-checkbox", label: "requiere facturacion dividida" },
              { name: "cfdi_document_id", component: "input-text", label: "cfdi document id" },
              { name: "cfdi_document_status", component: "input-text", label: "cfdi document status" },
              { name: "cfdi_document_name", component: "input-text", label: "cfdi document name" },
              { name: "pedido_articulo_index", component: "input-number", label: "pedido articulo index" },
              { name: "product_name", component: "input-text", label: "product name" },
              { name: "cantidad_original", component: "input-number", label: "cantidad original" },
              { name: "cantidad_facturable", component: "input-number", label: "cantidad facturable" },
              { name: "precio_unitario", component: "input-number", label: "precio unitario" },
              { name: "index", component: "input-number", label: "index" },
              { name: "articulos_count", component: "input-number", label: "articulos count" },
              { name: "articulos", component: "input-json", label: "articulos" },
              { name: "pedido", component: "input-text", label: "pedido" },
              { name: "pedido_estado", component: "input-text", label: "pedido estado" },
              { name: "contacto", component: "input-text", label: "contacto" },
              { name: "pedido_total", component: "input-number", label: "pedido total" },
              { name: "pedido_iva", component: "input-number", label: "pedido iva" },
              { name: "base_calculo", component: "input-text", label: "base calculo" },
              { name: "requiere_autorizacion_cobranza", component: "input-checkbox", label: "requiere autorizacion cobranza" },
              { name: "subpedidos", component: "input-json", label: "subpedidos" },
            ],
          },
        },
      }),
  },
];
