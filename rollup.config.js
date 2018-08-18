import pkg from './package.json';

const input = 'src/main.js';

export default [
  {
    input,
    output: {
      name: 'apiJson',
      file: pkg.browser,
      format: 'umd'
    }
  },
  {
    input,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];
