import { readFile, writeFile, readdir } from 'fs/promises';
import convert from 'heic-convert';

const dir = 'C:\\Users\\sahuy\\.gemini\\antigravity\\scratch\\portfolio-scroll\\public\\assets\\Kickstart with GitHub & Open Source';

const files = await readdir(dir);
for (const file of files) {
  if (file.toLowerCase().endsWith('.heif') || file.toLowerCase().endsWith('.heic')) {
    const inputPath = `${dir}\\${file}`;
    const outputName = file.replace(/\.(heif|heic|HEIF|HEIC)$/i, '.jpg');
    const outputPath = `${dir}\\${outputName}`;
    
    console.log(`Converting ${file} -> ${outputName}...`);
    const inputBuffer = await readFile(inputPath);
    const outputBuffer = await convert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 0.9,
    });
    await writeFile(outputPath, Buffer.from(outputBuffer));
    console.log(`Done: ${outputName}`);
  }
}
console.log('All conversions complete!');
