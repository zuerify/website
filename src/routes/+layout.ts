import type { LayoutLoad } from './$types';
import { detectLocale } from '$lib/i18n/i18n-util';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { setLocale } from '$lib/i18n/i18n-svelte';

export const load = (async (event) => {
	const [, lang] = event.url.pathname.split('/');
	const locale = detectLocale(() => [lang ?? '']);

	await loadLocaleAsync(locale);

	setLocale(locale);

	return event.data;
}) satisfies LayoutLoad;
