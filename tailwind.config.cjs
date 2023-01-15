const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['"Outfit"', ...fontFamily.sans]
		},

		extend: {
			colors: {
				primary: '#268bcc'
			},

			fontFamily: {
				aceh: ['"Aceh"']
			}
		}
	},
	darkMode: 'class',
	plugins: [require('@tailwindcss/forms')],
	experimental: { optimizeUniversalDefaults: true, matchVariant: true }
};
