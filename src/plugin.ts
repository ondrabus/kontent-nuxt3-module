//@ts-ignore
import { defineNuxtPlugin } from '#app'
import { DeliveryClient, IDeliveryClientConfig } from '@kentico/kontent-delivery'

export default defineNuxtPlugin((nuxtApp: any) => {

    if (!nuxtApp.$config || !nuxtApp.$config.kontent){
        console.error("Kontent Nuxt3 module: configuration object is missing.")
        return
    }

    const config = JSON.parse(JSON.stringify(nuxtApp.$config.kontent)) as IDeliveryClientConfig

    if (!config){
        console.error("Kontent Nuxt3 module: configuration object does not fit the config format. ")
        return
    }

    if (!config.defaultQueryConfig){
        config.defaultQueryConfig = { customHeaders: [] }
    }
    if (!config.defaultQueryConfig.customHeaders){
        config.defaultQueryConfig.customHeaders = [];
    }
    config.defaultQueryConfig.customHeaders.push({
        header: 'X-KC-SOURCE',
        value: 'kontent-nuxt3-module'
    })

    const kontent = new DeliveryClient(config)
    nuxtApp.provide('kontent', kontent)
})

//@ts-ignore
declare module '#app'{
    interface NuxtApp {
        $kontent: DeliveryClient
    }
}