import { getPreferredDark } from '$lib/theme';
import type { Handle } from '@sveltejs/kit';
import { dark } from '$lib/theme';

export const handle = (async ({ event, resolve }) => {
	dark.set(getPreferredDark());

	return resolve(event);
}) satisfies Handle;
