import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const dark = writable<boolean>(true);

export function getPreferredDark(): boolean {
	if (localStorage.getItem('dark')) {
		return localStorage.getItem('dark') == 'true';
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function setPreferredTheme(value: boolean) {
	localStorage.setItem('dark', String(value));

	if (window && browser) {
		document.documentElement.classList.toggle('dark', value);
	}

	dark.set(value);
}

export { dark };
