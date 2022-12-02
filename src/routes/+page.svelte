<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;

	let location: { ip: string; city: string } | null = null;

	setInterval(async () => {
		const res = await fetch($page.url.origin + '/api');

		location = await res.json();
	}, 1000);
</script>

<p>{data.test}</p>

<p>ip: {location == null ? 'loading..' : location.ip}</p>

<p>city: {location == null ? 'loading..' : location.city}</p>
