import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const lista_de_precios_tables: KirletTableDecl[] = [
  {
    name: "lista_de_precios",
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
      { name: "product", type: "text" },
      { name: "iva", type: "text" },
      { name: "descripcion", type: "text" },
      { name: "precio", type: "real" },
    ],
    indexes: [
      { name: "idx_lista_de_precios_name", columns: ["name"] },
      { name: "idx_lista_de_precios_active", columns: ["is_active"] },
    ],
  },
];
