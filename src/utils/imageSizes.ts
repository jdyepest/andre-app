type ImageSize = { width: number; height: number }

const imageSizes: Record<string, ImageSize> = {
  '/assets/therapy.jpg': { width: 1390, height: 1920 },
  '/assets/andre1.jpg': { width: 1355, height: 1920 },
  '/assets/libros.jpg': { width: 1440, height: 1920 },
  '/assets/solecito.webp': { width: 1024, height: 1024 },
  '/assets/imagen_sesiones_3.jpg': { width: 1440, height: 1920 },
  '/assets/imagen_sesiones_2.jpg': { width: 1173, height: 1920 },
  '/assets/DKS2.jpg': { width: 1920, height: 1920 },
  '/assets/campo_lilas.jpg': { width: 1920, height: 1920 },
  '/assets/andre_pintura.jpg': { width: 1445, height: 1920 },
  '/assets/remedios.jpeg': { width: 1159, height: 1920 },
  '/assets/refle3.jpg': { width: 1536, height: 1920 },
  '/assets/image2.jpg': { width: 1920, height: 1097 },
  '/assets/image4.jpg': { width: 1920, height: 1920 },
  '/assets/image5.jpg': { width: 1920, height: 1920 }
}

const SRCSET_WIDTH = 960
const SRCSET_IMAGES = new Set([
  '/assets/therapy.jpg',
  '/assets/andre1.jpg',
  '/assets/libros.jpg',
  '/assets/imagen_sesiones_3.jpg',
  '/assets/imagen_sesiones_2.jpg',
  '/assets/DKS2.jpg',
  '/assets/campo_lilas.jpg',
  '/assets/andre_pintura.jpg',
  '/assets/remedios.jpeg',
  '/assets/refle3.jpg',
  '/assets/image2.jpg',
  '/assets/image4.jpg',
  '/assets/image5.jpg'
])

const withVariant = (src: string, width: number) => {
  const match = src.match(/^(.*)(\.[^.]+)$/)
  if (!match) return src
  return `${match[1]}-${width}${match[2]}`
}

export const getImageSize = (src: string, fallback: ImageSize = { width: 1200, height: 800 }) =>
  imageSizes[src] || fallback

export const getImageSrcset = (src: string) => {
  const size = imageSizes[src]
  if (!size || size.width <= SRCSET_WIDTH || !SRCSET_IMAGES.has(src)) return ''
  return `${withVariant(src, SRCSET_WIDTH)} ${SRCSET_WIDTH}w, ${src} ${size.width}w`
}
