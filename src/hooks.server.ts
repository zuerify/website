import { dev } from '$app/environment';
import type { Handle } from '@sveltejs/kit';
import { inject } from '@vercel/analytics';

let injected = false;

export const handle = (async ({ event, resolve }) => {
	if (!injected) {
		inject({ mode: 'auto' });
		injected = true;
	}

	return resolve(event);
}) satisfies Handle;
