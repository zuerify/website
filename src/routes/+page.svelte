<script lang="ts">
	let dots = '.';

	setInterval(() => {
		if (dots.length == 3) {
			return (dots = '.');
		}

		dots += '.';
	}, 1000);
</script>

<div class="dark:bg-neutral-800 dark:text-stone-200 min-h-screen flex justify-center items-center">
	<div>
		<h3>Zuerify</h3>
		<h1 class="transition-all">Coming Soon{dots}</h1>
	</div>
</div>
