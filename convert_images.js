import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

// 1. Ensure sharp is installed
try {
  console.log('Checking if "sharp" is installed...');
  await import('sharp');
} catch (e) {
  console.log('"sharp" is not installed. Installing sharp locally...');
  try {
    execSync('npm install sharp', { stdio: 'inherit' });
    console.log('"sharp" successfully installed!');
  } catch (err) {
    console.error('Failed to install sharp automatically. Please run "npm install sharp" manually.');
    process.exit(1);
  }
}

const sharp = (await import('sharp')).default;

// 2. Scan, convert and clean up images
try {
  const files = fs.readdirSync(publicDir);
  console.log(`Scanning public folder for images to convert/clean up...`);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const inputPath = path.join(publicDir, file);
    
    if (['.png', '.jpg', '.jpeg', '.heic'].includes(ext)) {
      const outputName = path.basename(file, ext) + '.webp';
      const outputPath = path.join(publicDir, outputName);
      
      // If webp version already exists, clean up the original file
      if (fs.existsSync(outputPath)) {
        console.log(`Cleaning up original: ${file} (webp version already exists)`);
        try {
          fs.unlinkSync(inputPath);
          console.log(`✓ Deleted original ${file}`);
        } catch (unlinkErr) {
          console.error(`✗ Error deleting ${file}:`, unlinkErr.message);
        }
        continue;
      }
      
      console.log(`Converting: ${file} -> ${outputName}...`);
      
      try {
        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(outputPath);
        console.log(`✓ Converted ${file} successfully.`);
        
        // Delete original file after successful conversion
        fs.unlinkSync(inputPath);
        console.log(`✓ Deleted original ${file}`);
      } catch (err) {
        console.error(`✗ Error converting ${file}:`, err.message);
      }
    }
  }
  
  console.log('\nAll done! Image conversion and cleanup completed.');
} catch (error) {
  console.error('An error occurred during process:', error.message);
}
