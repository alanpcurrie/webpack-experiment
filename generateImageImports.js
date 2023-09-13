"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// scripts/generateImageImports.ts
var fs = require("fs");
var path = require("path");
var imagesDir = path.resolve(__dirname, './src/images');
var indexFile = path.resolve(__dirname, './src/index.ts');
fs.readdir(imagesDir, function (err, files) {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }
    var importStatements = files
        .filter(function (file) { return /\.(png|jpe?g|gif)$/i.test(file); })
        .map(function (file) { return "import './images/".concat(file, "';"); })
        .join('\n');
    fs.writeFile(indexFile, importStatements, function (err) {
        if (err) {
            console.error('Error writing to index.ts file', err);
            process.exit(1);
        }
        console.log('Image imports generated successfully.');
    });
});
