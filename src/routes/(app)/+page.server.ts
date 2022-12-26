import type { PageServerLoad } from './$types';
import { db } from '$lib/server/prisma';

export const load: PageServerLoad = async () => {
	return {
		user: null
		//await db.user.findMany()
	};
};

export const prerender = true;
