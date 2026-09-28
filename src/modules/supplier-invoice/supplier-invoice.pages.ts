import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-ventas";

export const supplier_invoice_pages: KirletPageDecl[] = [
  {
    id: "ventas.supplier-invoice",
    path: "supplier-invoice",
    permission: "subject.ventas.supplier-invoice.read",
    build: () =>
      build_feature_shell_page({
        id: "ventas.supplier-invoice",
        owner: "subject-ventas",
        title: "Facturas de proveedor",
        props: {
          basePath: "supplier-invoice",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Facturas de proveedor",
            subtitle: "Submenú de ventas",
            pluralLabel: "facturas de proveedor",
            singularLabel: "factura de proveedor",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/supplier-invoice`,
            record: `${API}/supplier-invoice/:id`,
            create: { method: "POST", action: `${API}/supplier-invoice` },
            update: { method: "PATCH", action: `${API}/supplier-invoice/:id` },
            delete: { method: "DELETE", action: `${API}/supplier-invoice/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "folio", label: "folio", sortable: true, priority: 3 },
              { key: "purchase_order", label: "purchase order", sortable: true, priority: 3 },
              { key: "purchase_order_folio", label: "purchase order folio", sortable: true, priority: 3 },
              { key: "proveedor", label: "proveedor", sortable: true, priority: 3 },
              { key: "proveedor_nombre", label: "proveedor nombre", sortable: true, priority: 3 },
              { key: "proveedor_rfc", label: "proveedor rfc", sortable: true, priority: 3 },
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
              { name: "purchase_order", component: "input-text", label: "purchase order" },
              { name: "purchase_order_folio", component: "input-text", label: "purchase order folio" },
              { name: "proveedor", component: "input-text", label: "proveedor" },
              { name: "proveedor_nombre", component: "input-text", label: "proveedor nombre" },
              { name: "proveedor_rfc", component: "input-text", label: "proveedor rfc" },
              { name: "emisor_rfc", component: "input-text", label: "emisor rfc" },
              { name: "numero_factura", component: "input-text", label: "numero factura" },
              { name: "uuid", component: "input-text", label: "uuid" },
              { name: "fecha_factura", component: "input-text", label: "fecha factura" },
              { name: "fecha_vencimiento", component: "input-text", label: "fecha vencimiento" },
              { name: "subtotal", component: "input-number", label: "subtotal" },
              { name: "impuestos", component: "input-number", label: "impuestos" },
              { name: "total", component: "input-number", label: "total" },
              { name: "origen", component: "input-text", label: "origen" },
              { name: "articulos", component: "input-json", label: "articulos" },
              { name: "estado", component: "input-text", label: "estado" },
              { name: "estado_match", component: "input-text", label: "estado match" },
              { name: "match_detalle", component: "input-json", label: "match detalle" },
              { name: "autorizado_por", component: "input-text", label: "autorizado por" },
              { name: "motivo_autorizacion", component: "input-text", label: "motivo autorizacion" },
              { name: "estado_pago", component: "input-text", label: "estado pago" },
              { name: "monto_pagado", component: "input-number", label: "monto pagado" },
              { name: "saldo", component: "input-number", label: "saldo" },
            ],
          },
        },
      }),
  },
];
