[![NPM](https://nodei.co/npm/kontent-nuxt3-module.png?mini=true)](https://npmjs.org/package/kontent-nuxt3-module)

# Nuxt3 module for Kontent by Kentico
Add content from the headless CMS [Kontent by Kentico](https://kontent.ai) to your Nuxt3 app.

## Features

This module enables you to use the [Kontent Delivery JS SDK](https://github.com/Kentico/kontent-delivery-sdk-js) in all your components, pages, and other places of your Nuxt3 app.

**Warning: Nuxt 3 is in beta and is not meant to be used on production. The implementation is still unstable.**

The implementation uses [the v11 of the JS Delivery SDK](https://github.com/Kentico/kontent-delivery-sdk-js/tree/vnext). The `deliveryClient` is registered as a Nuxt 3 plugin and accessible via app context:

```js
const kontent = useNuxtApp().$kontent
```

## Quick start
- Install via npm

```
npm i kontent-nuxt3-module --save

```

- Add `kontent-nuxt3-module` to `buildModules` section of `nuxt.config.js`

```js
  buildModules: [
    'kontent-nuxt3-module'
  ],
```

## Congifuration
The configuration is defined in `nuxt.config.ts` under `publicRuntimeConfig` section. The plugin expects an object `kontent` that respects the standard `IDeliveryClientConfig` interface (see [client configuration](https://github.com/Kentico/kontent-delivery-sdk-js/tree/vnext#client-configuration) on the official SDK page).

```js
// nuxt.config.js
...
publicRuntimeConfig: {
  kontent: {
    projectId: process.env.KONTENT_PROJECT_ID,
    previewApiKey: process.env.KONTENT_PREVIEW_KEY,
    defaultQueryConfig: {
      usePreviewMode: true
  }
}
...
```

## JS SDK redirect
In order to successfuly run the Nuxt3 website, you may need to use the CJS package of the Kontent Delivery JS SDK. You can configure it in `vite.config.js`:

```
// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@kentico/kontent-core": "@kentico/kontent-core/dist/cjs",
      "@kentico/kontent-delivery": "@kentico/kontent-delivery/dist/cjs"
    }
  }
})
```

## Sample app
You can find the [Nuxt3 sample Lumen app here](https://github.com/ondrabus/nuxt3-starter-kontent-lumen). Among others, it shows how to work with stores and dynamic routing.

