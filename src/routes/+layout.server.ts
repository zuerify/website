import type { LayoutServerLoad } from './$types';
import { dev } from '$app/environment';
import { db } from '$lib/server/prisma';

export const load: LayoutServerLoad = async () => {
	!dev && (await import('@vercel/analytics')).inject();

	const users = db.user.findMany();

	return { users };
};
