# Ventas

La app `subject-ventas` publica en el menú "Ventas" las páginas de órdenes de
compra, pedidos, solicitudes de facturación, productos, lista de precios,
contacto, solicitudes de compra, facturas de proveedor y pagos a proveedor.
Lo que esta ficha deja probado hoy es el contrato de solo lectura de la app:
que responde sano y que su manifiesto la identifica.

## Sub-features

La app hace la acción de `health`. Escribe: no.
La app hace la acción de `manifest`. Escribe: no.

Esta ficha no lleva línea `Subject:` con imagen: el catálogo no da un tag
para rellenarla. El hueco está en `despliegue.md`.

- `health` responde `GET /health` 200 con `status: "ok"`, `ready: true` y
  `service: "subject-ventas"`.
- `manifest` responde `GET /manifest` 200 con `technicalId: "subject-ventas"`
  y `dependsOn: ["subject-almacen"]`.

### Archivos y contratos

- `src/subject.ts` — `define_subject` de `subject-ventas` y sus `dependsOn`
  (`subject-almacen`).
- `src/modules/*/*.routes.ts` — módulos y recursos de la app.
- `manifest.json` — salida de `bun run manifest:emit`; menú, páginas y
  permisos.
- `GET /health` y `GET /manifest` — contrato HTTP del kit
  (`vendor/kit/src/kirlet/serve.ts`).

### Mapa

| id | ruta | rol semilla | pasos | esperado | muta | receta |
| --- | --- | --- | --- | --- | --- | --- |
| `subject-ventas.health` | `GET /health` | sin sesión | pedir la ruta a `http://127.0.0.1:3219` | HTTP 200, `service: "subject-ventas"`, `ready: true` | no | `arnes health` |
| `subject-ventas.manifest` | `GET /manifest` | sin sesión | pedir la ruta a `http://127.0.0.1:3219` | HTTP 200, `technicalId: "subject-ventas"` | no | `arnes manifest` |

## How to get to it (user POV)

- Menú "Ventas" del shell, con las entradas `purchase-order`,
  `lista-de-precios`, `contacto`, `sku`, `invoice-request`,
  `purchase-request`, `supplier-invoice`, `supplier-payment`, `pedidos` y
  `products` de `manifest.json`.
- Como cliente: `http://127.0.0.1:3219/health` y
  `http://127.0.0.1:3219/manifest`.

## Driving it with arnes

Preconditions:

- Doctor en 0. Si falta `subject-ventas`, la receta sale `omitida`.

- **Abrir.** `GET /health` y `GET /manifest`; el status HTTP y el campo que
  nombra `subject-ventas`.
- **Proof.** `evidence/ventas/`.

## Gotchas

- Una receta de lectura que escribe sale en fallo aunque la pantalla se vea bien.
- La ficha aún no nombra base QA: ninguna receta que muta corre.
- `omitida` no cuenta como probada.
