import type { PageServerLoad } from './$types';
import { geolocation } from '@vercel/edge';

export const load: PageServerLoad = async ({ request }) => {
	console.log(geolocation(request));
	return {
		geolocation: ''
	};
};
