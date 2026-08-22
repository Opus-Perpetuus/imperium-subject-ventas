import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const sku_tables: KirletTableDecl[] = [
  {
    name: "sku",
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
      { name: "puedoProducirlo", type: "boolean" },
      { name: "puedoComprarlo", type: "boolean" },
      { name: "puedoVenderlo", type: "boolean" },
      { name: "codigo", type: "text" },
      { name: "unidad", type: "text" },
      { name: "existencia", type: "real" },
      { name: "costoVenta", type: "real" },
      { name: "stockMinimo", type: "real" },
      { name: "stockMaximo", type: "text" },
      { name: "etiquetas", type: "text" },
    ],
    indexes: [
      { name: "idx_sku_name", columns: ["name"] },
      { name: "idx_sku_active", columns: ["is_active"] },
    ],
  },
];
