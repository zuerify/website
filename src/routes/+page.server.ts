import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => ({ test: 'hello' });