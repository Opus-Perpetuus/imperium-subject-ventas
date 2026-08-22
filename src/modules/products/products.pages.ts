import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-ventas";

export const products_pages: KirletPageDecl[] = [
  {
    id: "ventas.products",
    path: "products",
    permission: "subject.ventas.products.read",
    build: () =>
      build_feature_shell_page({
        id: "ventas.products",
        owner: "subject-ventas",
        title: "Productos",
        props: {
          basePath: "products",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Productos",
            subtitle: "Submenú de ventas",
            pluralLabel: "productos",
            singularLabel: "productos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/products`,
            record: `${API}/products/:id`,
            create: { method: "POST", action: `${API}/products` },
            update: { method: "PATCH", action: `${API}/products/:id` },
            delete: { method: "DELETE", action: `${API}/products/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "puedoProducirlo", label: "puedoProducirlo", sortable: true, priority: 3 },
              { key: "puedoComprarlo", label: "puedoComprarlo", sortable: true, priority: 3 },
              { key: "puedoVenderlo", label: "puedoVenderlo", sortable: true, priority: 3 },
              { key: "codigo", label: "codigo", sortable: true, priority: 3 },
              { key: "positional_code", label: "positional code", sortable: true, priority: 3 },
              { key: "unidad", label: "unidad", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "puedoProducirlo", component: "input-checkbox", label: "puedoProducirlo" },
              { name: "puedoComprarlo", component: "input-checkbox", label: "puedoComprarlo" },
              { name: "puedoVenderlo", component: "input-checkbox", label: "puedoVenderlo" },
              { name: "codigo", component: "input-text", label: "codigo" },
              { name: "positional_code", component: "input-text", label: "positional code" },
              { name: "unidad", component: "input-text", label: "unidad" },
              { name: "descripcion", component: "input-text", label: "descripcion" },
              { name: "existencia", component: "input-number", label: "existencia" },
              { name: "existenciaApartada", component: "input-number", label: "existenciaApartada" },
              { name: "existenciaDisponible", component: "input-text", label: "existenciaDisponible" },
              { name: "costoVenta", component: "input-number", label: "costoVenta" },
              { name: "costoCompraPromedio", component: "input-number", label: "costoCompraPromedio" },
              { name: "ultimoCostoCompra", component: "input-number", label: "ultimoCostoCompra" },
              { name: "fechaUltimaCompra", component: "input-text", label: "fechaUltimaCompra" },
              { name: "stockMinimo", component: "input-number", label: "stockMinimo" },
              { name: "stockMaximo", component: "input-text", label: "stockMaximo" },
              { name: "etiquetas", component: "input-text", label: "etiquetas" },
              { name: "image", component: "input-text", label: "image" },
              { name: "codigos_proveedor", component: "input-text", label: "codigos proveedor" },
              { name: "clave_prod_serv", component: "input-text", label: "clave prod serv" },
              { name: "objeto_imp_default", component: "input-text", label: "objeto imp default" },
              { name: "ubicacion_preferida", component: "input-text", label: "ubicacion preferida" },
              { name: "ubicacion_preferida_codigo", component: "input-text", label: "ubicacion preferida codigo" },
              { name: "proveedor", component: "input-text", label: "proveedor" },
              { name: "proveedor_nombre", component: "input-text", label: "proveedor nombre" },
            ],
          },
        },
      }),
  },
];
