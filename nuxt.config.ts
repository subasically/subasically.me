export default defineNuxtConfig({
	compatibilityDate: "2025-01-16",

	app: {
		head: {
			title: "Subasically.me",
		},
	},

	css: ["~/assets/styles/global.css"],

	typescript: {
		shim: false,
	},
});