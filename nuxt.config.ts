// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    ssr: false,
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-icons']
})
