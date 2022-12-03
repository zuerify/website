import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: vercel({ edge: true, split: true }),

		csp: {
			mode: 'auto',
			directives: {
				'script-src': ['self', 'vercel.live'],
				'connect-src': ['self', 'vitals.vercel-analytics.com', 'vercel.live']
			}
		}
	}
};

export default config;
