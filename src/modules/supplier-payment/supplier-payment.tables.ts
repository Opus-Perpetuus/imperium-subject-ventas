import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const supplier_payment_tables: KirletTableDecl[] = [
  {
    name: "supplier_payment",
    columns: [
      { name: "id", type: "text", primaryKey: true },
      { name: "name", type: "text", notNull: true },
      { name: "description", type: "text" },
      { name: "is_active", type: "boolean", notNull: true, default: true },
      { name: "state", type: "text" },
      { name: "ref", type: "text", unique: true },
      { name: "search_field", type: "text" },
      { name: "created_by", type: "text" },
      { name: "custom_data", type: "json" },
      { name: "payload", type: "json" },
      { name: "created_at", type: "text", notNull: true },
      { name: "updated_at", type: "text", notNull: true },
      { name: "folio", type: "real" },
      { name: "supplier_invoice", type: "text" },
      { name: "numero_factura", type: "text" },
      { name: "purchase_order", type: "text" },
      { name: "proveedor", type: "text" },
      { name: "proveedor_nombre", type: "text" },
      { name: "fecha_pago", type: "text" },
      { name: "metodo_pago", type: "text" },
      { name: "referencia", type: "text" },
      { name: "monto", type: "real" },
      { name: "status", type: "text" },
      { name: "motivo_cancelacion", type: "text" },
      { name: "notas", type: "text" },
    ],
    indexes: [
      { name: "idx_supplier_payment_name", columns: ["name"] },
      { name: "idx_supplier_payment_active", columns: ["is_active"] },
      { name: "idx_supplier_payment_invoice", columns: ["supplier_invoice"] },
    ],
  },
];
