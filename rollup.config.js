export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/ng2-fone.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng2-fone',
    globals: {
        '@angular/core': 'ng.core',
    }
}