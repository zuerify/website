<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	// css
	import '$lib/main.css';
	import '@fontsource/work-sans';

	export const prerender = true;
</script>

<div class="flex min-h-screen flex-col justify-between  dark:bg-neutral-300 dark:text-stone-700">
	<Header />

	<main class="flex flex-grow">
		<slot />
	</main>

	<Footer />
</div>
