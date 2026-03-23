import { resolve } from 'node:path'
import { access } from 'node:fs/promises'
import sharp from 'sharp'

const assetsDir = resolve(process.cwd(), 'src/public/assets')

const images = [
  'therapy.jpg',
  'andre1.jpg',
  'libros.jpg',
  'imagen_sesiones_3.jpg',
  'imagen_sesiones_2.jpg',
  'DKS2.jpg',
  'campo_lilas.jpg',
  'andre_pintura.jpg',
  'remedios.jpeg',
  'refle3.jpg',
  'image2.jpg',
  'image4.jpg',
  'image5.jpg'
]

const sizes = [null, 960]
const formats = [
  { ext: 'webp', options: { quality: 72 } },
  { ext: 'avif', options: { quality: 45 } }
]

const buildOutputName = (filename, size, ext) => {
  const base = filename.replace(/\.[^.]+$/, '')
  return size ? `${base}-${size}.${ext}` : `${base}.${ext}`
}

const processImage = async (filename) => {
  const inputPath = resolve(assetsDir, filename)
  await access(inputPath)

  for (const size of sizes) {
    for (const format of formats) {
      const outputName = buildOutputName(filename, size, format.ext)
      const outputPath = resolve(assetsDir, outputName)
      let pipeline = sharp(inputPath)
      if (size) {
        pipeline = pipeline.resize({ width: size })
      }
      if (format.ext === 'webp') {
        pipeline = pipeline.webp(format.options)
      } else if (format.ext === 'avif') {
        pipeline = pipeline.avif(format.options)
      }
      await pipeline.toFile(outputPath)
    }
  }
}

const run = async () => {
  for (const filename of images) {
    await processImage(filename)
  }
}

run()
