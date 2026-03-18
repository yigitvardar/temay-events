import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

let processed = 0;
let skipped = 0;
let savedBytes = 0;

async function getSize(filePath) {
  const s = await stat(filePath);
  return s.size;
}

async function optimizeJpeg(inputPath, maxWidth = 1920, quality = 82) {
  const originalSize = await getSize(inputPath);
  const tmp = inputPath + '.tmp';

  await sharp(inputPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(tmp);

  const newSize = await getSize(tmp);

  if (newSize < originalSize) {
    const { rename } = await import('fs/promises');
    await rename(tmp, inputPath);
    savedBytes += originalSize - newSize;
    console.log(`  ✓ ${basename(inputPath)}: ${(originalSize / 1048576).toFixed(1)}MB → ${(newSize / 1048576).toFixed(1)}MB`);
    processed++;
  } else {
    const { unlink } = await import('fs/promises');
    await unlink(tmp);
    console.log(`  ~ ${basename(inputPath)}: already optimal`);
    skipped++;
  }
}

async function pngToJpeg(inputPath, outputPath, maxWidth = 1200, quality = 82) {
  const { existsSync } = await import('fs');
  if (existsSync(outputPath)) {
    skipped++;
    return;
  }

  const originalSize = await getSize(inputPath);

  await sharp(inputPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(outputPath);

  const newSize = await getSize(outputPath);
  savedBytes += originalSize - newSize;
  console.log(`  ✓ ${basename(inputPath)} → .jpg: ${(originalSize / 1048576).toFixed(1)}MB → ${(newSize / 1048576).toFixed(1)}MB`);
  processed++;
}

async function processDirectory(dir, recursive = false) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && recursive) {
      await processDirectory(fullPath, true);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg') {
        await optimizeJpeg(fullPath);
      }
    }
  }
}

async function processPhotoss(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      await processPhotoss(fullPath);
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === '.png') {
      const jpgPath = fullPath.replace(/\.png$/i, '.jpg');
      await pngToJpeg(fullPath, jpgPath);
    }
  }
}

console.log('\n🔧 Temay — Image Optimizer\n');

console.log('📂 Menu-BG (JPG sıkıştırma):');
await processDirectory(join(publicDir, 'Menu-BG'));

console.log('\n📂 photoss (PNG → JPG dönüşümü):');
await processPhotoss(join(publicDir, 'photoss'));

console.log(`\n✅ Tamamlandı: ${processed} dosya optimize edildi, ${skipped} atlandı`);
console.log(`💾 Kazanılan alan: ${(savedBytes / 1048576).toFixed(1)} MB`);
