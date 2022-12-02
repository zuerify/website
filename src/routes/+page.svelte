<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;

	let randomString = '';

	setInterval(async () => {
		const res = await fetch($page.url.origin + '/api');

		randomString = await res.text();
	}, 1000);
</script>

<p>{data.test}</p>

<p>randon string => {randomString}</p>
