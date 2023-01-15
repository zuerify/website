<script lang="ts">
	import { onMount } from 'svelte';
	import { setPreferredTheme, getPreferredDark } from '$lib/theme';
	import font from '$lib/font/Aceh-ExtraBold.woff2';
	import icons2 from '$lib/font/material-icons-rounded-all-400-normal.woff2';
	import icons from '$lib/font/material-icons-rounded-all-400-normal.woff';
	import EN from '$lib/images/en.webp';
	import DE from '$lib/images/de.webp';
	import { LL, setLocale, locale } from '$lib/i18n/i18n-svelte';
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import type { Locales } from '$lib/i18n/i18n-types';
	import { locales } from '$lib/i18n/i18n-util';
	import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
	import { fly } from 'svelte/transition';

	export const replaceLocaleInUrl = (url: URL, locale: string, full = false): string => {
		const [, , ...rest] = url.pathname.split('/');
		const new_pathname = `/${[locale, ...rest].join('/')}`;
		if (!full) {
			return `${new_pathname}${url.search}`;
		}
		const newUrl = new URL(url.toString());
		newUrl.pathname = new_pathname;
		return newUrl.toString();
	};

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return;
		// load new dictionary from server
		await loadLocaleAsync(newLocale);
		// select locale
		setLocale(newLocale);
		// update `lang` attribute
		document.querySelector('html')?.setAttribute('lang', newLocale);
		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale));
		}
		// run the `load` function again
		invalidateAll();
	};

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false);
	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales;
		switchLocale(lang, false);
		history.replaceState(
			{ ...history.state, locale: lang },
			'',
			replaceLocaleInUrl($page.url, lang)
		);
	}

	let dark: boolean | null = null;
	let active: number | null = null;
	let scrollY: number;
	let innerWidth: number;
	let menuOpen: boolean = false;

	onMount(() => {
		dark = getPreferredDark();
		setPreferredTheme(dark);
	});

	function switchTheme() {
		dark = !dark;
		setPreferredTheme(dark);
	}

	function localeToString(locale: Locales): 'DE' | 'EN' {
		return locale.toUpperCase() as 'DE' | 'EN';
	}
</script>

<svelte:window bind:scrollY bind:innerWidth />

<svelte:head>
	<link rel="preload" as="font" type="font/woff2" href={font} crossorigin="anonymous" />
	<link rel="preload" as="font" type="font/woff2" href={icons2} crossorigin="anonymous" />
	<link rel="preload" as="font" type="font/woff" href={icons} crossorigin="anonymous" />

	<script>
		setPreferredTheme(getPreferredDark());

		function getPreferredDark() {
			if (localStorage.getItem('dark')) {
				return localStorage.getItem('dark') == 'true';
			}

			return window.matchMedia('(prefers-color-scheme: dark)').matches;
		}

		function setPreferredTheme(value) {
			localStorage.setItem('dark', String(value));

			if (window) {
				document.documentElement.classList.toggle('dark', value);
			}
		}
	</script>
</svelte:head>

<header
	class="sticky top-0  flex items-center justify-between bg-neutral-100/75 px-4 py-2.5 backdrop-blur-sm backdrop-filter  dark:bg-slate-900/75 {scrollY >
		10 && 'shadow-sm'}"
>
	<a href="/{$locale}/" id="header-title" class="flex items-center gap-2 font-aceh">
		<h2>zuerify</h2>
	</a>

	<nav on:pointerleave={() => (active = null)} class="hidden items-center gap-5 md:flex">
		<a
			on:pointerenter={() => (active = 1)}
			class="transition-all active:underline {active && active !== 1 ? 'text-neutral-500' : ''}"
			href="/{$locale}/services"
		>
			{$LL.HEADER.NAVIGATION.SERVICES()}
		</a>
		<a
			on:pointerenter={() => (active = 2)}
			class="transition-all active:underline {active && active !== 2 ? 'text-neutral-500' : ''}"
			href="/{$locale}/projects"
		>
			{$LL.HEADER.NAVIGATION.WORK()}
		</a>
		<a
			on:pointerenter={() => (active = 3)}
			class="transition-all active:underline {active && active !== 3 ? 'text-neutral-500' : ''}"
			href="/{$locale}/testimonials"
		>
			{$LL.HEADER.NAVIGATION.TESTIMONIALS()}
		</a>
		<a
			on:pointerenter={() => (active = 5)}
			class="transition-all active:underline {active && active !== 5 ? 'text-neutral-500' : ''}"
			href="/{$locale}/about"
		>
			{$LL.HEADER.NAVIGATION.ABOUT()}
		</a>
		<a
			on:pointerenter={() => (active = 4)}
			class="transition-all active:underline {active && active !== 4 ? 'text-neutral-500' : ''}"
			href="/{$locale}/contact"
		>
			{$LL.HEADER.NAVIGATION.CONTACT()}
		</a>

		<button
			on:pointerenter={() => (active = -1)}
			class="group relative appearance-none border-none bg-transparent outline-none"
			name="language"
		>
			<img src={$locale == 'de' ? DE : EN} alt="English" class="h-6 w-6 rounded-full " />

			<div
				class="absolute right-0 mt-3 hidden w-max flex-col gap-1 rounded bg-neutral-200/80 p-2 shadow backdrop-blur group-focus:flex dark:bg-slate-800/80"
			>
				{#each locales as l}
					<a
						on:pointerdown={() => switchLocale(l, true)}
						data-sveltekit-preload-data="tap"
						href={replaceLocaleInUrl($page.url, l)}
						class:activeLang={$locale == l}
						class="flex gap-2 rounded py-1.5 pr-2 pl-1 hover:bg-neutral-200/95 dark:hover:bg-slate-800/95"
						in:fly
					>
						{#await import(`$lib/images/${l}.webp`) then img}
							<img
								src={img.default}
								alt={$LL.HEADER.LANGSELECT[localeToString(l)]()}
								class="h-6 w-6 rounded-full "
							/>
						{/await}

						{$LL.HEADER.LANGSELECT[localeToString(l)]()}
					</a>
				{/each}
			</div>
		</button>

		<button
			title="Toggles light & dark"
			aria-label="auto"
			aria-live="polite"
			on:click={switchTheme}
			on:pointerenter={() => (active = -1)}
			class="h-6 w-6 overflow-hidden"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				enable-background="new 0 0 24 24"
				height="24px"
				viewBox="0 0 24 24"
				width="24px"
				class="h-6 w-6 fill-current transition-transform {dark
					? 'translate-y-full'
					: 'translate-y-0'}"
				fill="inherit"
			>
				<rect fill="none" height="24" width="24" />
				<path
					d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
				/>
			</svg>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				enable-background="new 0 0 24 24"
				height="24px"
				viewBox="0 0 24 24"
				class="h-6 w-6 fill-current transition-transform {!dark
					? 'translate-y-0'
					: '-translate-y-full'}"
				width="24px"
				fill="inherit"
			>
				<rect fill="none" height="24" width="24" />
				<path
					d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"
				/>
			</svg>
		</button>
	</nav>

	<button
		on:click={() => (menuOpen = !menuOpen)}
		class="flex items-center justify-center md:hidden"
	>
		<i class="material-icons-rounded text-3xl">menu</i>
	</button>
</header>

<div
	on:pointerdown={() => (menuOpen = false)}
	class="fixed left-0 top-0 h-screen w-screen bg-slate-50/10 backdrop-blur-sm dark:bg-slate-900/10 md:hidden {menuOpen
		? ' block'
		: 'hidden'}"
/>

<nav
	class="fixed top-0 flex h-screen w-[70vw] bg-slate-100/80 p-5 pt-20 backdrop-blur-md backdrop-filter transition-[right] dark:bg-slate-900/80 md:hidden {!menuOpen
		? '-right-full'
		: 'right-0'}"
>
	<div class="absolute top-0 right-0 flex items-center justify-center ">
		<div class="flex aspect-square w-[64px] items-center justify-center">
			<button
				title="Toggles light & dark"
				aria-label="auto"
				aria-live="polite"
				on:click={switchTheme}
				class="h-6 w-6 overflow-hidden"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					enable-background="new 0 0 24 24"
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
					class="h-6 w-6 fill-current transition-transform {dark
						? 'translate-y-full'
						: 'translate-y-0'}"
					fill="inherit"
				>
					<rect fill="none" height="24" width="24" />
					<path
						d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
					/>
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					enable-background="new 0 0 24 24"
					height="24px"
					viewBox="0 0 24 24"
					class="h-6 w-6 fill-current transition-transform {!dark
						? 'translate-y-0'
						: '-translate-y-full'}"
					width="24px"
					fill="inherit"
				>
					<rect fill="none" height="24" width="24" />
					<path
						d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"
					/>
				</svg>
			</button>
		</div>

		<div class="h-[30px] w-px bg-blue-900/50 dark:bg-slate-500" />

		<button
			on:click={() => (menuOpen = false)}
			class="flex aspect-square w-[64px] items-center justify-center"
		>
			<i class="material-icons-rounded text-3xl">close</i>
		</button>
	</div>

	<div class="flex flex-col gap-7">
		<a
			on:click={() => (menuOpen = false)}
			class="text-xl transition-all active:underline"
			href="/{$locale}/services"
		>
			{$LL.HEADER.NAVIGATION.SERVICES()}
		</a>
		<a
			on:click={() => (menuOpen = false)}
			class="text-xl transition-all active:underline "
			href="/{$locale}/projects"
		>
			{$LL.HEADER.NAVIGATION.WORK()}
		</a>
		<a
			on:click={() => (menuOpen = false)}
			class="text-xl transition-all active:underline "
			href="/{$locale}/testimonials"
		>
			{$LL.HEADER.NAVIGATION.TESTIMONIALS()}
		</a>
		<a
			on:click={() => (menuOpen = false)}
			class="text-xl transition-all active:underline"
			href="/{$locale}/about"
		>
			{$LL.HEADER.NAVIGATION.ABOUT()}
		</a>
		<a
			on:click={() => (menuOpen = false)}
			class="text-xl transition-all active:underline "
			href="/{$locale}/contact"
		>
			{$LL.HEADER.NAVIGATION.CONTACT()}
		</a>
	</div>
</nav>
