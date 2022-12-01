<script lang="ts">
	import '$lib/main.css';
	import { webVitals } from '$lib/vitals/webvitals';
	import { browser, dev } from '$app/environment';
	import { page } from '$app/stores';

	let analyticsId = import.meta.env.VERCEL_WEB_ANALYTICS_ID;

	$: if (browser && analyticsId) {
		console.log('c');
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		});
	}

	(async () => !dev && (await import('@vercel/analytics')).inject())();
</script>

<slot />
