import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const dir = 'C:\\Users\\sahuy\\.gemini\\antigravity\\scratch\\portfolio-scroll\\public\\assets\\photo section';
const files = await readdir(dir);

for (const file of files) {
  if (file.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i)) {
    try {
      const meta = await sharp(join(dir, file)).metadata();
      const orientation = meta.width > meta.height ? 'LANDSCAPE' : 'PORTRAIT';
      console.log(`${file}: ${meta.width}x${meta.height} → ${orientation}`);
    } catch (e) {
      console.log(`${file}: ERROR - ${e.message}`);
    }
  }
}
