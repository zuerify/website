import { geolocation } from '@vercel/edge';

export default function middleware(request) {
	const url = new URL(request.url);

	const { country } = geolocation(request);
	// You can also get the country using dot notation on the function
	// const country = geolocation(request).country;

	request.country = country;

	// Return a new redirect response
	return Response.redirect(url);
}
