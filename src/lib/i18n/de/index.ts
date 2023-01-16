import type { Translation } from '../i18n-types.js';

const de: Translation = {
	HEADER: {
		LANGSELECT: {
			DE: 'Deutsch',
			EN: 'Englisch'
		},
		NAVIGATION: {
			SERVICES: 'dienstleistungen',
			WORK: 'arbeit',
			TESTIMONIALS: 'referenzen',
			ABOUT: 'über uns',
			CONTACT: 'kontakt'
		}
	},

	MAIN: {
		CONTACT_BUTTON: 'Jetzt kontaktieren',
		LEARN_MORE: 'Mehr erfahren',

		HERO: {
			SLOGAN: 'Beeindruckende Online-Präsenz, nur einen Klick entfernt.',
			PARAGRAPHS: [
				'Wir sind darauf spezialisiert, optisch ansprechende und benutzerfreundliche Websites für Unternehmen zu erstellen, damit diese eine starke Online-Präsenz aufbauen und ihre Zielgruppen erreichen können.',
				'Wir sind ein Team von leidenschaftlichen Designern und Entwicklern, die sich der Erstellung von Webseiten verschrieben haben, die nicht nur optisch ansprechend, sondern auch funktional und einfach zu bedienen sind.'
			]
		},

		OUR_SERVICES: {
			TITLE: 'Unsere Dienstleistungen',
			SERVICES: [
				{
					TITLE: 'Website Design',
					DESCRIPTION:
						'In Gesprächen mit dem Kunden und auf der Suche nach Inspirationen im Internet erstellen wir detaillierte Designkonzepte, die den Bedürfnissen des Kunden entsprechen.'
				},
				{
					TITLE: 'Website Entwicklung',
					DESCRIPTION:
						'Mit unserer Erfahrung und unserem Wissen erstellen wir funktionsreiche Websites, die blitzschnell sind und mit dem technischen Fortschritt mithalten.'
				},
				{
					TITLE: 'Website Wartung',
					DESCRIPTION:
						'Wir bieten kontinuierlichen Support und Wartung für Ihre Website und stellen auch Schulungen und Tools zur Verfügung, damit Sie auch Änderungen an Ihrer Website vornehmen können.'
				}
			]
		}
	},

	// this is an example Translation, just rename or delete this folder if you want
	HI: 'Hallo {name}! Bitte hinterlasse einen Stern, wenn dir das Projekt gefällt: https://github.com/ivanhofer/typesafe-i18n'
};

export default de;
