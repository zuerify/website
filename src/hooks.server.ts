import { inject } from '@vercel/analytics';
import { detectLocale, i18n, isLocale } from '$lib/i18n/i18n-util';
import type { Handle, RequestEvent } from '@sveltejs/kit';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import type { Locales } from '$lib/i18n/i18n-types';

let injected = false;

export const handle = (async ({ event, resolve }) => {
	if (!injected) {
		inject({ mode: 'auto' });
		injected = true;
	}

	const [, lang] = event.url.pathname.split('/');

	if (!lang) {
		const locale = getPreferredLocale(event);

		return new Response(null, {
			status: 302,
			headers: { Location: `/${locale}` }
		});
	}

	const locale = isLocale(lang) ? (lang as Locales) : getPreferredLocale(event);

	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', locale) });
}) satisfies Handle;

const getPreferredLocale = ({ request }: RequestEvent) => {
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request);

	return detectLocale(acceptLanguageDetector);
};
