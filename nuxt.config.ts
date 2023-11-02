// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-primevue"],
  primevue: {
    usePrimeVue: true,
    options: {},
    importPT: undefined,
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      include: ["Button", "DataTable", "Chart"],
    },
    directives: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
    composables: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
  },
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
  ],
});
