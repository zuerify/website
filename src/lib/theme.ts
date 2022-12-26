export function getPreferredDark(): boolean {
	if (localStorage.getItem('dark')) {
		return localStorage.getItem('dark') == 'true';
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function setPreferredTheme(value: boolean) {
	localStorage.setItem('dark', String(value));

	if (window) {
		document.documentElement.classList.toggle('dark', value);
	}
}
