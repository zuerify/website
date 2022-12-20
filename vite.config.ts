import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit(), imagetools()],

	optimizeDeps: {
		force: true
	}
};

export default config;
