var fs = require('fs'),
  path = require('path'),
  rollup = require('rollup'),
  resolve = require('rollup-plugin-node-resolve'),
  babel = require('rollup-plugin-babel'),
  uglify = require('rollup-plugin-uglify'),
  minify = require('uglify-es').minify;

var production = !process.env.ROLLUP_WATCH;
var utilsPath = path.resolve(__dirname, './packages');
var srcFiles = fs.readdirSync(utilsPath);
var utils = []

srcFiles.forEach(function (filename) {
  if (/[\d\D]*\.js$/g.test(filename)) {
    utils.push(filename);
  }
});

utils.forEach(function (filename) {
  var inputOptions = {
    input: `./packages/${filename}`,
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      }),
      production && uglify({}, minify)
    ]
  };
  var isMainJs = filename === 'main.js'
  var outputOptions = {
    file: isMainJs ? './dist/index.js' : `./dist/${filename}`,
    format: isMainJs ? 'umd' : 'es',
    name: isMainJs ? 'Utils' : ''
  };

  build(inputOptions, outputOptions);
})


async function build(inputOptions, outputOptions) {
  const bundle = await rollup.rollup(inputOptions);

  await bundle.write(outputOptions);
}