import vercel from '@sveltejs/adapter-vercel';
import node from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: vercel({ edge: true, split: true }),
		serviceWorker: {
			register: process.env.NODE_ENV === 'production'
		}

		//adapter: node({ precompress: true })
	}
};

export default config;
