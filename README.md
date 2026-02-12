# Nuxt 3 (SSG + i18n + Data-Driven Content)

This project is organized as a Nuxt 3 SSG-ready site with file-based routing, data-driven content, and ES/EN i18n.

## Setup

```bash
npm install
```

## Local Development

```bash
npm run dev
```

## Build and Generate (SSG)

```bash
npm run build
npm run generate
```

The static output lives in `.output/public`.

## Preview Production Build

```bash
npm run preview
```

## Key Structure

- Pages: `src/pages/*`
- Shared UI: `src/components/*`
- Data content (ES/EN): `src/data/content.ts`
- i18n config: `i18n/i18n.config.ts`
- Locales: `i18n/locales/es.json`, `i18n/locales/en.json`
- Public assets: `src/public/assets/*` (referenced as `/assets/...` in templates)

## i18n Behavior

- Default locale: `es`
- English: `/en/...`
