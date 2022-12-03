import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	return {
		platform: await new Promise((r, e) => {
			setTimeout(() => {
				r(platform);
			}, 2000);
		})
	};
};
