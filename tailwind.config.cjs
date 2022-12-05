const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['"Work Sans"', ...fontFamily.sans]
		},
		extend: {
			colors: {
				primary: '#268bcc'
			}
		}
	},
	darkMode: 'class',
	plugins: [],
	experimental: { optimizeUniversalDefaults: true, matchVariant: true }
};
