import { defineNuxtModule, addPlugin, tryResolvePath } from '@nuxt/kit'
import * as path from 'path'

export default defineNuxtModule({
    name: 'kontent-nuxt3-module',
    setup (options, nuxt){

        // TODO: this implementation currently does not work
        // It forces plugin DST to originate from nuxt.options.buildDir instead of node_modules!
        // but is the right way to add the plugin
        //
        // addPlugin({
        //     src: path.resolve(__dirname, 'plugin.js')
        // })

        nuxt.options.plugins.push({
            src: path.resolve(__dirname, 'plugin.js'),
            mode: 'all'
        })
    }
})