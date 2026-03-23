# AGENTS.md

## Resumen del proyecto
Sitio Nuxt 3 (SSG) con Vue 3 + script setup, i18n ES/EN y Tailwind.

## Comandos
- `npm install`
- `npm run dev` (puerto 3001)
- `npm run build`
- `npm run generate`
- `npm run preview`

## Estructura
- `src/pages/`: rutas (file-based routing)
- `src/components/`: UI compartida
- `src/composables/`: data fetching reutilizable (ej. `useContentData`, `useLandingData`)
- `src/server/api/`: endpoints mock (futuro backend)
- `src/types/`: tipados de payloads
- `i18n/locales/`: traducciones ES/EN
- `src/assets/css/`: estilos globales
- `src/public/assets/`: assets públicos (referir como `/assets/...`)

## Reglas de i18n y contenido
- No hardcodear strings en templates o scripts. Todo texto debe vivir en `i18n/locales/es.json` y `i18n/locales/en.json`.
- Usar `t`/`$t` para strings y `tm`/`rt` cuando el contenido sea arrays u objetos de traducción.
- Cuando se agreguen nuevos textos o estructuras, actualizar ambos locales y los tipos en `src/types` si aplica.

## Datos y APIs (mock por ahora)
- Cualquier dato que debería venir del backend debe consumirse vía un endpoint mock en `src/server/api/`.
- Consumir esos endpoints con `useAsyncData` + `$fetch` (ver `useContentData` y `useLandingData`).
- Pasar `locale` en la query y proveer fallbacks vacíos para evitar `undefined` en templates.

## Estilos (Tailwind reutilizable)
- Usar utilidades de Tailwind directamente o crear clases reutilizables con `@apply` en CSS.
- Evitar estilos inline y duplicación de reglas.
- Mantener tokens/globales en `src/assets/css/global.css`.

## Buenas prácticas
- Usar Composition API de Vue (preferentemente con `script setup`).
- TypeScript cuando aplique.
- Componentes pequeños, props tipadas y sin manipulación directa del DOM.
- Para links internos usar `useLocalePath`.
