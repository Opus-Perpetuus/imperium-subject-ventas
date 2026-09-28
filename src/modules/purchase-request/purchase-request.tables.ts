import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const purchase_request_tables: KirletTableDecl[] = [
  {
    name: "purchase_request",
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
      { name: "solicitante", type: "text" },
      { name: "solicitante_nombre", type: "text" },
      { name: "departamento", type: "text" },
      { name: "fecha_requerida", type: "text" },
      { name: "estado", type: "text" },
      { name: "total_estimado", type: "real" },
      { name: "aprobado_por", type: "text" },
      { name: "aprobado_por_nombre", type: "text" },
      { name: "fecha_aprobacion", type: "text" },
      { name: "motivo_rechazo", type: "text" },
      { name: "ordenes_compra", type: "json" },
      { name: "articulos", type: "json" },
    ],
    indexes: [
      { name: "idx_purchase_request_name", columns: ["name"] },
      { name: "idx_purchase_request_active", columns: ["is_active"] },
    ],
  },
];
