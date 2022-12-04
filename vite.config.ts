import { sveltekit } from '@sveltejs/kit/vite';
// @ts-expect-error no types for this package
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit(), SvelteKitPWA()]
};

export default config;
