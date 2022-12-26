<script lang="ts">
	import Header from '../../lib/components/Header.svelte';
	import Footer from '../../lib/components/Footer.svelte';

	// css
	import '$lib/main.css';

	export const prerender = true;
</script>

<div class="flex min-h-screen flex-col justify-between ">
	<Header />

	<main class="mx-auto flex w-full max-w-screen-xl flex-grow px-4">
		<slot />
	</main>
</div>

<Footer />
