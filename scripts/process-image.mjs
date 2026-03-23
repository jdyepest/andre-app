import { access } from 'node:fs/promises'
import { basename, dirname, extname, resolve, sep } from 'node:path'
import sharp from 'sharp'

const args = process.argv.slice(2)
const getArg = (long, short) => {
  const longIndex = args.indexOf(`--${long}`)
  if (longIndex !== -1 && args[longIndex + 1]) return args[longIndex + 1]
  const shortIndex = short ? args.indexOf(`-${short}`) : -1
  if (shortIndex !== -1 && args[shortIndex + 1]) return args[shortIndex + 1]
  return ''
}

const inputArg = getArg('input', 'i')
if (!inputArg) {
  console.error('Usage: node scripts/process-image.mjs --input <path> [--sizes 960,1440] [--formats webp,avif] [--out-dir <path>]')
  process.exit(1)
}

const sizesArg = getArg('sizes', 's') || 'orig,960'
const formatsArg = getArg('formats', 'f') || 'webp,avif'
const outDirArg = getArg('out-dir', 'o')
const webpQuality = Number(getArg('quality-webp', '')) || 72
const avifQuality = Number(getArg('quality-avif', '')) || 45

const sizes = sizesArg
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean)
  .map((value) => (value === 'orig' ? null : Number(value)))

if (sizes.some((size) => size !== null && Number.isNaN(size))) {
  console.error('Invalid sizes. Use numbers (e.g. 960) or "orig".')
  process.exit(1)
}

const formats = formatsArg
  .split(',')
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean)

const inputPath = resolve(process.cwd(), inputArg)
await access(inputPath)

const outputDir = outDirArg ? resolve(process.cwd(), outDirArg) : dirname(inputPath)
const base = basename(inputPath, extname(inputPath))

const metadata = await sharp(inputPath).metadata()
console.log(`[info] Source: ${inputPath}`)
if (metadata.width && metadata.height) {
  console.log(`[info] Size: ${metadata.width}x${metadata.height}`)
}

const publicDir = resolve(process.cwd(), 'src/public')
if (inputPath.startsWith(publicDir + sep)) {
  const publicPath = `/${inputPath.slice(publicDir.length + 1).replace(/\\/g, '/')}`
  if (metadata.width && metadata.height) {
    console.log(`[hint] Add to src/utils/imageSizes.ts: '${publicPath}': { width: ${metadata.width}, height: ${metadata.height} }`)
  }
}

const buildOutputName = (size, format) => {
  if (!size) return `${base}.${format}`
  return `${base}-${size}.${format}`
}

for (const size of sizes) {
  for (const format of formats) {
    const outputName = buildOutputName(size, format)
    const outputPath = resolve(outputDir, outputName)
    let pipeline = sharp(inputPath)
    if (size) {
      pipeline = pipeline.resize({ width: size })
    }
    if (format === 'webp') {
      pipeline = pipeline.webp({ quality: webpQuality })
    } else if (format === 'avif') {
      pipeline = pipeline.avif({ quality: avifQuality })
    } else if (format === 'jpg' || format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true })
    } else if (format === 'png') {
      pipeline = pipeline.png({ compressionLevel: 9 })
    } else {
      console.warn(`[warn] Unknown format: ${format}. Skipping.`)
      continue
    }
    await pipeline.toFile(outputPath)
    console.log(`[ok] ${outputPath}`)
  }
}
