import vercel from '@sveltejs/adapter-vercel';
import node from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({}),

	kit: {
		prerender: {
			concurrency: 2
		},

		adapter: vercel({ edge: true, split: true })

		//adapter: node({ precompress: true })
	},

	compilerOptions: {
		css: 'external'
	}
};

export default config;
