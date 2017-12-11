import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: './src/main.js',
  output: {
    file: './dist/index.js',
    name: 'Utils',
    format: 'umd',
    sourcemap: true
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}