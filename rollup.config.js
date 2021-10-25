import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'

export default {
    input: ['./src/module.ts', './src/plugin.ts'],
    output: {
        dir: 'dist',
        format: 'esm',
        exports: "auto"
    },
    plugins: [
        // typescript({
        //     lib: ["es5", "es6", "dom"],
        //     target: "es5",
        //     tsconfig: "./tsconfig.json"
        // }),
        resolve({extensions: [".ts", ".js"]}),
        commonjs(),
        babel({
            extensions: [".ts", ".js"],
            babelHelpers: 'bundled'
        })
    ],
    external: [
        '@kentico/kontent-delivery',
        'nuxt3',
        '@nuxt/kit',
        'path'
    ],
    treeshake: 'smallest'
}