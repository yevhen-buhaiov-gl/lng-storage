const { build } = require('esbuild');
const dependencies = require('./package.json');

const entryFile = 'src/index.js';

const shared = {
    bundle: true,
    entryPoints: [entryFile],
    external: Object.keys(dependencies),
    logLevel: 'info',
    minify: true,
};

build({
    ...shared,
    format: 'esm',
    outfile: './dist/index.esm.js',
    target: ['esnext'],
});

build({
    ...shared,
    format: 'cjs',
    outfile: './dist/index.cjs.js',
    target: ['esnext'],
});
