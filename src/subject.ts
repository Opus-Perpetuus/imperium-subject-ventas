import { define_subject } from "@opus-perpetuus/imperium-core-kit";
import pkg from "../package.json" with { type: "json" };
import { purchase_order_module } from "./modules/purchase-order/purchase-order.routes.ts";
import { pedidos_module } from "./modules/pedidos/pedidos.routes.ts";
import { invoice_request_module } from "./modules/invoice-request/invoice-request.routes.ts";
import { products_module } from "./modules/products/products.routes.ts";
import { lista_de_precios_module } from "./modules/lista-de-precios/lista-de-precios.routes.ts";
import { contacto_module } from "./modules/contacto/contacto.routes.ts";
import { sku_module } from "./modules/sku/sku.routes.ts";
import { seed_demo } from "./seed.ts";

export const SUBJECT = define_subject({
  id: "SUBJECT-ventas",
  name: "Ventas",
  version: pkg.version,
  image: `ghcr.io/opus-perpetuus/subject-ventas:${pkg.version}`,
  compat: { nox: ">=0.5.0", kit: "^0.5.0" },
  schema_version: 1,
  menu_root: {
    id: "ventas.root",
    label: "Ventas",
    order: 0,
  },
  modules: [purchase_order_module, pedidos_module, invoice_request_module, products_module, lista_de_precios_module, contacto_module, sku_module],
  seed: seed_demo,
});

export const KIRLET = SUBJECT;
