export default defineNuxtConfig({
  hooks: {
    'vite:extendConfig'(config, { isClient }) {
      if (isClient) {
        if (!config.resolve) config.resolve = {};
        if (!config.resolve.alias) config.resolve.alias = {};
        Object.assign(config.resolve.alias, { vue: 'vue/dist/vue.esm-bundler.js' });
      }
    }
  },
  nitro: {
    preset: 'vercel'
  },
})
