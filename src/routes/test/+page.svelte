<script lang="ts">
	import type { PageData } from './$types';

	export const prerender = true;
	export let data: PageData;
</script>

<h1>
	Platform: {data.platform}
</h1>
