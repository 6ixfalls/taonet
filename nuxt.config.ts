// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        { href: "https://api.fontshare.com/v2/css?f[]=general-sans@600,400&f[]=gambetta@400&display=swap", rel: "stylesheet" }
      ],
      bodyAttrs: {
        class: "bg-gray-950"
      }
    },
  }
})
