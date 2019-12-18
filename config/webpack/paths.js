const { resolve } = require('path');

module.exports = {
  root: resolve(__dirname, '../', '../'),
  outputPath: resolve(__dirname, '../', '../', 'build'),
  entryPath: resolve(__dirname, '../', '../', 'src/index.tsx'),
  templatePath: resolve(__dirname, '../', '../', 'dev-assets/index.template.ejs'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js'
};