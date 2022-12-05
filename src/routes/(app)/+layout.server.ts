import type { LayoutServerLoad } from './$types';
import { dev } from '$app/environment';

export const load: LayoutServerLoad = async () => {
	!dev && (await import('@vercel/analytics')).inject();

	return;
};
