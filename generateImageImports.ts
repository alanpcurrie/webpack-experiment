// scripts/generateImageImports.ts
import * as fs from 'fs';
import * as path from 'path';

const imagesDir = path.resolve(__dirname, './src/images');
const indexFile = path.resolve(__dirname, './src/index.ts');

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  const importStatements = files
    .filter((file) => /\.(png|jpe?g|gif)$/i.test(file))
    .map((file) => `import './images/${file}';`)
    .join('\n');

  fs.writeFile(indexFile, importStatements, (err) => {
    if (err) {
      console.error('Error writing to index.ts file', err);
      process.exit(1);
    }

    console.log('Image imports generated successfully.');
  });
});
