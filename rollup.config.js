
export default {
    input: './out-tsc/src/plugin.js',
    output: {
        file: 'dist/plugin.js',
        format: 'esm'
    },
    external: [
        '@kentico/kontent-delivery',
        'nuxt3'
    ],
    treeshake: 'smallest'
}