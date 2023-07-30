// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"nuxt-electron",
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"nuxt-icons",
	],
	electron: {
		build: [
			{
				entry: "electron/main.ts",
			},
		],
	},
	ssr: false,
	builder: 'vite',
});
