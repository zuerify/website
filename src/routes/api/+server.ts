import type { RequestHandler } from '../../../.svelte-kit/types/src/routes/$types';

export const GET: RequestHandler = () => {
	return new Response(String(Math.random()));
};
