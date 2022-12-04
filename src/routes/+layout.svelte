<script lang="ts">
	// css
	import '$lib/main.css';
	import '@fontsource/work-sans';
	import Header from './Header.svelte';

	export const prerender = true;
</script>

<svelte:head>
	<script>
		document.documentElement.classList.toggle(
			'dark',
			localStorage.getItem('theme-preference')
				? localStorage.getItem('theme-preference') == 'dark'
				: window.matchMedia('(prefers-color-scheme: dark)').matches
		);
	</script>
</svelte:head>

<div class="dark:bg-neutral-800 dark:text-stone-200">
	<Header />

	<slot />
</div>
