import { redirect, type RequestEvent } from '@sveltejs/kit';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { detectLocale } from '$lib/i18n/i18n-util';
import type { PageServerLoad } from './$types';

export const load = (async (request) => {
	redirect(301, `/${getPreferredLocale(request)}`);
	return {};
}) satisfies PageServerLoad;

const getPreferredLocale = ({ request }: RequestEvent) => {
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request);

	return detectLocale(acceptLanguageDetector);
};
