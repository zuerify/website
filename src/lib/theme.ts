export function getPreferredDark(): boolean {
	if (localStorage.getItem('dark')) {
		return localStorage.getItem('dark') == 'true';
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function setPreferredTheme(value: boolean) {
	console.log('hello');
	localStorage.setItem('dark', String(value));

	console.log('hello2');
	if (window) {
		console.log('hello3', value);
		document.documentElement.classList.toggle('dark', value);
	}
}
