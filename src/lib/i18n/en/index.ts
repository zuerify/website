import type { BaseTranslation } from '../i18n-types.js';

const en: BaseTranslation = {
	HEADER: {
		LANGSELECT: {
			DE: 'German',
			EN: 'English'
		},
		NAVIGATION: {
			SERVICES: 'our services',
			WORK: 'our work',
			TESTIMONIALS: 'testimonials',
			ABOUT: 'about us',
			CONTACT: 'contact us'
		}
	},

	MAIN: {
		CONTACT_BUTTON: 'Contact us now',

		HERO: {
			SLOGAN: 'Stunning online presence, just one click away.',
			PARAGRAPHS: [
				'We specialize in creating visually stunning and user-friendly websites for businesses to establish a strong online presence and reach their target audience.',
				'We are a team of passionate designers and developers who are committed to creating websitesthat are not only visually appealing but also functional and easy to use.'
			]
		}
	},

	// TODO: your translations go here
	HI: 'Hi {name:string}! Please leave a star if you like this project: https://github.com/ivanhofer/typesafe-i18n'
};

export default en;
