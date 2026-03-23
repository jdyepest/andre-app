# SKILLS.md

## Imagenes (flujo recomendado)
1. Guarda la imagen en `src/public/assets/`.
2. Usa JPG/JPEG para fotos, SVG para logos/ilustraciones y evita PNG pesado.
3. Optimiza y genera variantes con el script: `node scripts/process-image.mjs --input src/public/assets/tu-imagen.jpg`.
4. Agrega el tamanio real en `src/utils/imageSizes.ts` y el path en `SRCSET_IMAGES` si quieres `-960`.
5. Usa `<picture>` con AVIF/WebP y `srcset` + `sizes` en el componente.
6. Alt text siempre desde i18n (`i18n/locales/es.json` y `i18n/locales/en.json`).

## Snippet base para imagenes
```vue
<picture>
  <source v-if="avifSrcset" type="image/avif" :srcset="avifSrcset" sizes="(min-width: 1024px) 50vw, 90vw">
  <source v-if="webpSrcset" type="image/webp" :srcset="webpSrcset" sizes="(min-width: 1024px) 50vw, 90vw">
  <img
    :src="image"
    :alt="imageAlt"
    loading="lazy"
    decoding="async"
    :width="imageSize.width"
    :height="imageSize.height"
    :srcset="imageSrcset || undefined"
    sizes="(min-width: 1024px) 50vw, 90vw"
  >
</picture>
```

## Script: procesar cualquier imagen
- Basico: `node scripts/process-image.mjs --input src/public/assets/tu-imagen.jpg`
- Con tamanios: `node scripts/process-image.mjs --input src/public/assets/tu-imagen.jpg --sizes orig,960`
- Otros formatos: `node scripts/process-image.mjs --input src/public/assets/tu-imagen.jpg --formats webp,avif`
- Output custom: `node scripts/process-image.mjs --input src/public/assets/tu-imagen.jpg --out-dir src/public/assets`

Genera `webp` y `avif` (y variantes `-960`) en el mismo folder por defecto.
