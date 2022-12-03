<script lang="ts">
	import '$lib/main.css';
	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';
	import { webVitals } from '$lib/vitals/webvitals';
	import { browser, dev } from '$app/environment';
	import { page } from '$app/stores';

	export const prerender = true;

	onMount(async () => {
		if (pwaInfo) {
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
				onRegistered(r) {
					// uncomment following code if you want check for updates
					// r && setInterval(() => {
					//    console.log('Checking for sw update')
					//    r.update()
					// }, 20000 /* 20s for testing purposes */)
				},
				onRegisterError(error) {}
			});
		}
	});

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';

	let analyticsId = import.meta.env.VITE_ANALYTICS;

	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		});
	}

	(async () => !dev && (await import('@vercel/analytics')).inject())();
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

<slot />
