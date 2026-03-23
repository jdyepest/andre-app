import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const PUBLIC_DIR = resolve(process.cwd(), 'src/public')
const PROD_URL = 'https://creartemotion.com'

const normalizeUrl = (url) => url.replace(/\/+$/, '')
const siteUrl = normalizeUrl(process.env.SITE_URL || process.env.URL || PROD_URL)
const isProd = siteUrl === PROD_URL

const sitemapEntries = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/acerca-de-mi', changefreq: 'monthly', priority: '0.8' },
  { path: '/sesiones', changefreq: 'monthly', priority: '0.9' },
  { path: '/reflexiones', changefreq: 'monthly', priority: '0.7' },
  { path: '/cuerpos', changefreq: 'yearly', priority: '0.5' },
  { path: '/control', changefreq: 'yearly', priority: '0.5' },
  { path: '/carta-al-psicoanalisis', changefreq: 'yearly', priority: '0.5' }
]

const buildSitemap = () => {
  if (!isProd) {
    return `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n`
  }

  const urls = sitemapEntries
    .map((entry) => {
      const loc = `${siteUrl}${entry.path}`
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
        '  </url>'
      ].join('\n')
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${urls}\n` +
    `</urlset>\n`
}

const buildRobots = () => {
  if (!isProd) {
    return `User-agent: *\nDisallow: /\n`
  }
  return `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
}

const buildHeaders = () => {
  if (!isProd) {
    return `/*\n  X-Robots-Tag: noindex, nofollow, noarchive\n`
  }
  return `/*\n  X-Robots-Tag: index, follow\n`
}

mkdirSync(PUBLIC_DIR, { recursive: true })

writeFileSync(resolve(PUBLIC_DIR, 'sitemap.xml'), buildSitemap(), 'utf-8')
writeFileSync(resolve(PUBLIC_DIR, 'robots.txt'), buildRobots(), 'utf-8')
writeFileSync(resolve(PUBLIC_DIR, '_headers'), buildHeaders(), 'utf-8')
