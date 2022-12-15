/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'rounded': '1px 1px 10px 1px #fca5a5'
			}
		},
		animation: {
			'fadeIn': 'fadeIn 0.5s ease-in-out'
		},
		keyframes: {
			fadeIn: {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' },
			}
		}
	},
	plugins: [],
}
