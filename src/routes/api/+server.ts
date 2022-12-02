import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ getClientAddress, request }) => {
	return json({
		ip: getClientAddress(),
		city: decodeURIComponent(request.headers.get('x-vercel-ip-city') ?? 'not found')
	});
};
