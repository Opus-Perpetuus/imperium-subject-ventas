import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-ventas";

export const supplier_payment_pages: KirletPageDecl[] = [
  {
    id: "ventas.supplier-payment",
    path: "supplier-payment",
    permission: "subject.ventas.supplier-payment.read",
    build: () =>
      build_feature_shell_page({
        id: "ventas.supplier-payment",
        owner: "subject-ventas",
        title: "Pagos a proveedor",
        props: {
          basePath: "supplier-payment",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Pagos a proveedor",
            subtitle: "Submenú de ventas",
            pluralLabel: "pagos a proveedor",
            singularLabel: "pago a proveedor",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/supplier-payment`,
            record: `${API}/supplier-payment/:id`,
            create: { method: "POST", action: `${API}/supplier-payment` },
            update: { method: "PATCH", action: `${API}/supplier-payment/:id` },
            delete: { method: "DELETE", action: `${API}/supplier-payment/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "folio", label: "folio", sortable: true, priority: 3 },
              { key: "supplier_invoice", label: "supplier invoice", sortable: true, priority: 3 },
              { key: "numero_factura", label: "numero factura", sortable: true, priority: 3 },
              { key: "purchase_order", label: "purchase order", sortable: true, priority: 3 },
              { key: "proveedor", label: "proveedor", sortable: true, priority: 3 },
              { key: "proveedor_nombre", label: "proveedor nombre", sortable: true, priority: 3 },
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
              { name: "supplier_invoice", component: "input-text", label: "supplier invoice" },
              { name: "numero_factura", component: "input-text", label: "numero factura" },
              { name: "purchase_order", component: "input-text", label: "purchase order" },
              { name: "proveedor", component: "input-text", label: "proveedor" },
              { name: "proveedor_nombre", component: "input-text", label: "proveedor nombre" },
              { name: "fecha_pago", component: "input-text", label: "fecha pago" },
              { name: "metodo_pago", component: "input-text", label: "metodo pago" },
              { name: "referencia", component: "input-text", label: "referencia" },
              { name: "monto", component: "input-number", label: "monto" },
              { name: "status", component: "input-text", label: "status" },
              { name: "motivo_cancelacion", component: "input-text", label: "motivo cancelacion" },
              { name: "notas", component: "input-text", label: "notas" },
            ],
          },
        },
      }),
  },
];
