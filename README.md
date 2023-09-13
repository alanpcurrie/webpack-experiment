
---

### Webpack Config Experiment

#### Overview

This project is a robust Webpack configuration experiment geared towards optimizing and streamlining the build process for a large variety of assets including stylesheets and images. The setup leverages several powerful Webpack plugins and loaders to enhance the developer experience and optimize the production output.

#### Features

- **Image Optimization and Responsive Images**: Automatically generates import statements for all image files in a specified directory, preparing them for optimization with responsive-loader and sharp for various devices and performance scenarios.
- **SASS Compilation**: Compiles SASS files into a single CSS file, leveraging mini-css-extract-plugin to extract the CSS into a standalone file.
- **CSS Minimization**: Utilizes css-minimizer-webpack-plugin to reduce the CSS file size for production.
- **Browser Sync**: Achieved through the Browser Sync Webpack Plugin to synchronize browsers and devices for testing.
- **Clean Output Directory**: Ensures a clean output directory before each build using the clean-webpack-plugin.
- **Dashboard**: Includes webpack-dashboard plugin for a cleaner and more readable Webpack output during development.
- **Bundle Analysis**: Offers the ability to visualize and analyze your bundles through webpack-bundle-analyzer.

#### Scripts

- **start**: Launches Webpack in development mode with file watching enabled: `npm run start`.
- **build**: Builds the project in production mode: `npm run build`.
- **serve**: Serves the project using Webpack's development server: `npm run serve`.
- **generate:imports**: Compiles and runs a TypeScript script to generate import statements for all images in a specified directory: `npm run generate:imports`.
- **generate:images**: A convenience script that runs `generate:imports` and then builds the project in production mode: `npm run img`.

#### Image Import Generation

The `generateImageImports.ts` script is used to generate import statements for all image files in the `src/images` directory, which are then added to the `src/index.ts` file. This script facilitates the handling of images by Webpack, allowing for automatic optimization and responsive image generation.

#### Plugins and Loaders

- **Loaders**: css-loader, sass-loader, style-loader, and responsive-loader.
- **Plugins**: Browser Sync Webpack Plugin, clean-webpack-plugin, compression-webpack-plugin, copy-webpack-plugin, html-webpack-plugin, mini-css-extract-plugin, stylelint-webpack-plugin, terser-webpack-plugin, webpack-dashboard, webpack-bundle-analyzer, and webpackbar.

#### Installation

1. Clone the repository and navigate to the project directory.
2. Install the necessary npm packages with the command: `npm install`.
3. Run the build script with the command: `npm run build`.
4. Find the output assets in the `dist/` directory, ready to be used in other projects.

---
