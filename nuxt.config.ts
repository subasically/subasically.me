// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/scripts'],
  runtimeConfig: {
    tallyApiKey: process.env.TALLY_API_KEY,
    public: {
      plausibleScriptSrc: process.env.PLAUSIBLE_SCRIPT_SRC || '',
      plausibleDomain: process.env.PLAUSIBLE_DOMAIN || '',
      plausibleApiHost: process.env.PLAUSIBLE_API_HOST || 'https://plausible.io',
    },
  },
  experimental: {
    appManifest: false,
  },
  nitro: {
    awsAmplify: {
      // catchAllStaticFallback: true,
      // imageOptimization: { "/_image", cacheControl: "public, max-age=3600, immutable" },
      // imageSettings: { ... },
    }
  }
})
