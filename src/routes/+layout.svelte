<script lang="ts">
	import '$lib/main.css';
	import { webVitals } from '$lib/vitals/webvitals';
	import { browser, dev } from '$app/environment';
	import { page } from '$app/stores';

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

<slot />
