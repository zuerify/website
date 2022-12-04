import type { LayoutServerLoad } from './$types';
import { dev } from '$app/environment';
import '@fontsource/work-sans';

export const load: LayoutServerLoad = async () => {
	!dev && (await import('@vercel/analytics')).inject();

	return;
};
