import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'images');

const MAX_SIZE = 500 * 1024; // 500KB
const MAX_WIDTH = 1920;

async function getFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getFiles(fullPath));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

async function compressImage(filePath) {
  try {
    const stats = await stat(filePath);
    const ext = extname(filePath).toLowerCase();
    const name = basename(filePath, ext);
    const dir = dirname(filePath);
    const webpPath = join(dir, `${name}.webp`);

    console.log(`Converting ${filePath.split('/images/')[1]} (${(stats.size / 1024).toFixed(0)}KB)...`);

    let image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if too wide
    if (metadata.width > MAX_WIDTH) {
      image = image.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    // Convert to WebP
    let quality = 85;
    let buffer = await image.webp({ quality }).toBuffer();

    // If still too big, reduce quality
    while (buffer.length > MAX_SIZE && quality > 40) {
      quality -= 10;
      buffer = await image.webp({ quality }).toBuffer();
    }

    await sharp(buffer).toFile(webpPath);
    console.log(`  → ${name}.webp: ${(buffer.length / 1024).toFixed(0)}KB (quality: ${quality})`);

    // Delete original file
    await unlink(filePath);
    console.log(`  → Deleted original ${ext} file`);

  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('Converting images to WebP...\n');

  const files = await getFiles(publicDir);
  console.log(`Found ${files.length} images to convert\n`);

  for (const file of files) {
    await compressImage(file);
  }

  console.log('\nDone!');
}

main();
