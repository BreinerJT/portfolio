/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'rounded': '1px 1px 10px 1px #fca5a5'
			}
		},
	},
	plugins: [],
}
