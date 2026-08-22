import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-ventas";

export const contacto_pages: KirletPageDecl[] = [
  {
    id: "ventas.contacto",
    path: "contacto",
    permission: "subject.ventas.contacto.read",
    build: () =>
      build_feature_shell_page({
        id: "ventas.contacto",
        owner: "subject-ventas",
        title: "Contacto",
        props: {
          basePath: "contacto",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Contacto",
            subtitle: "Submenú de ventas",
            pluralLabel: "contacto",
            singularLabel: "contacto",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/contacto`,
            record: `${API}/contacto/:id`,
            create: { method: "POST", action: `${API}/contacto` },
            update: { method: "PATCH", action: `${API}/contacto/:id` },
            delete: { method: "DELETE", action: `${API}/contacto/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "rfc", label: "rfc", sortable: true, priority: 3 },
              { key: "esCliente", label: "esCliente", sortable: true, priority: 3 },
              { key: "esProveedor", label: "esProveedor", sortable: true, priority: 3 },
              { key: "codigo", label: "codigo", sortable: true, priority: 3 },
              { key: "rutas", label: "rutas", sortable: true, priority: 3 },
              { key: "usuariosAsignados", label: "usuariosAsignados", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "rfc", component: "input-text", label: "rfc" },
              { name: "esCliente", component: "input-text", label: "esCliente" },
              { name: "esProveedor", component: "input-text", label: "esProveedor" },
              { name: "codigo", component: "input-text", label: "codigo" },
              { name: "rutas", component: "input-text", label: "rutas" },
              { name: "usuariosAsignados", component: "input-text", label: "usuariosAsignados" },
              { name: "listaDePrecios", component: "input-text", label: "listaDePrecios" },
              { name: "facturacion_dividida_habilitada", component: "input-checkbox", label: "facturacion dividida habilitada" },
              { name: "facturacion_dividida_monto_maximo", component: "input-number", label: "facturacion dividida monto maximo" },
              { name: "facturacion_requiere_autorizacion_cobranza", component: "input-checkbox", label: "facturacion requiere autorizacion cobranza" },
              { name: "nombre_fiscal", component: "input-text", label: "nombre fiscal" },
              { name: "regimen_fiscal", component: "input-text", label: "regimen fiscal" },
              { name: "uso_cfdi_default", component: "input-text", label: "uso cfdi default" },
              { name: "calle", component: "input-text", label: "calle" },
              { name: "numeroInterior", component: "input-text", label: "numeroInterior" },
              { name: "numeroExterior", component: "input-text", label: "numeroExterior" },
              { name: "colonia", component: "input-text", label: "colonia" },
              { name: "codigoPostal", component: "input-text", label: "codigoPostal" },
              { name: "estado", component: "input-text", label: "estado" },
              { name: "pais", component: "input-text", label: "pais" },
              { name: "ciudad", component: "input-text", label: "ciudad" },
              { name: "urlMaps", component: "input-text", label: "urlMaps" },
              { name: "ubicacion", component: "input-text", label: "ubicacion" },
              { name: "latitude", component: "input-number", label: "latitude" },
              { name: "longitude", component: "input-number", label: "longitude" },
            ],
          },
        },
      }),
  },
];
