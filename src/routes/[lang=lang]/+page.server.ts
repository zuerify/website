import { db } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const works = await db.project.findMany();
	return {
		works: works
	};
};
