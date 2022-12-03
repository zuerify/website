import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import webfontDownload from 'vite-plugin-webfont-dl';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), SvelteKitPWA(), webfontDownload()],

	build: {
		sourcemap: 'true'
	}
};

export default config;
