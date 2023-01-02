<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '@fontsource/material-icons-rounded';

	// css
	import '$lib/main.css';

	export const prerender = true;
</script>

<div class="flex min-h-screen flex-col justify-between ">
	<Header />

	<main class="mx-auto flex w-full max-w-screen-2xl flex-grow flex-col px-4">
		<slot />
	</main>
</div>

<Footer />
