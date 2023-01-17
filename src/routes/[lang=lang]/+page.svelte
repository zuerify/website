<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import { dark } from '$lib/theme';
	import type { PageData } from './$types';

	export let data: PageData;

	let services = [0, 1, 2] as (0 | 1 | 2)[];
</script>

<section
	class="flex h-screen flex-grow flex-col items-center justify-around pb-20 md:flex-row md:justify-between md:gap-32"
>
	<div class="flex flex-col gap-3">
		<h1 class="mb-5 text-3xl  md:text-4xl xl:text-5xl">
			{$LL.MAIN.HERO.SLOGAN()}
		</h1>

		<p>
			{$LL.MAIN.HERO.PARAGRAPHS[0]()}
		</p>

		<p class="mb-7">
			{$LL.MAIN.HERO.PARAGRAPHS[1]()}
		</p>

		<button
			class="float-left w-fit rounded-md bg-neutral-200 py-2 px-5 transition-shadow duration-300 hover:shadow-xl active:shadow-none dark:bg-slate-800"
		>
			{$LL.MAIN.CONTACT_BUTTON()}
		</button>
	</div>

	<div class="w-full min-w-[350px] lg:w-[75%]">
		<svg
			class="h-full w-full"
			viewBox="100 0 700 600"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				class="fill-neutral-100 dark:fill-slate-900"
				fill={$dark ? '#0f172a' : '#f5f5f5'}
				d="M0 0h900v600H0z"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M193.467 115.96h-3.013a1.317 1.317 0 0 1-1.315-1.316v-3.013c0-.728.593-1.315 1.315-1.315h3.013a1.32 1.32 0 0 1 1.316 1.315v3.013a1.313 1.313 0 0 1-1.316 1.316zm-10.446 0h-3.013a1.32 1.32 0 0 1-1.315-1.316v-3.013c0-.728.593-1.315 1.315-1.315h3.013a1.32 1.32 0 0 1 1.315 1.315v3.013a1.32 1.32 0 0 1-1.315 1.316zm-10.453 0h-3.013a1.32 1.32 0 0 1-1.315-1.316v-3.013c0-.728.593-1.315 1.315-1.315h3.013a1.32 1.32 0 0 1 1.315 1.315v3.013a1.312 1.312 0 0 1-1.315 1.316zm-10.447 0h-3.012a1.32 1.32 0 0 1-1.316-1.316v-3.013c0-.728.593-1.315 1.316-1.315h3.012c.729 0 1.322.593 1.322 1.315v3.013a1.33 1.33 0 0 1-1.322 1.316zm-10.446 0h-3.013a1.322 1.322 0 0 1-1.321-1.316v-3.013c0-.728.593-1.315 1.321-1.315h3.013a1.32 1.32 0 0 1 1.315 1.315v3.013a1.32 1.32 0 0 1-1.315 1.316zm30.963-11.392h-3.013a1.32 1.32 0 0 1-1.315-1.315v-3.019a1.32 1.32 0 0 1 1.315-1.315h3.013c.729 0 1.315.593 1.315 1.315v3.013a1.313 1.313 0 0 1-1.315 1.321zm-10.446 0h-3.013a1.32 1.32 0 0 1-1.315-1.315v-3.019a1.32 1.32 0 0 1 1.315-1.315h3.013a1.32 1.32 0 0 1 1.315 1.315v3.013a1.313 1.313 0 0 1-1.315 1.321zm-10.447 0h-3.013a1.32 1.32 0 0 1-1.321-1.315v-3.019c0-.722.592-1.315 1.321-1.315h3.013a1.32 1.32 0 0 1 1.315 1.315v3.013c0 .729-.593 1.321-1.315 1.321zm10.823 23.629h-3.013a1.32 1.32 0 0 1-1.315-1.315v-3.013c0-.729.593-1.316 1.315-1.316h3.013a1.32 1.32 0 0 1 1.315 1.316v3.013a1.311 1.311 0 0 1-1.315 1.315zm-10.447 0h-3.012a1.32 1.32 0 0 1-1.316-1.315v-3.013c0-.729.593-1.316 1.316-1.316h3.012c.729 0 1.322.593 1.322 1.316v3.013a1.33 1.33 0 0 1-1.322 1.315zm522.419 351.05h4.089c.988 0 1.784.804 1.784 1.784v4.089c0 .989-.804 1.785-1.784 1.785h-4.089a1.791 1.791 0 0 1-1.785-1.785v-4.089a1.78 1.78 0 0 1 1.785-1.784zm14.177 0h4.089c.98 0 1.784.804 1.784 1.784v4.089c0 .989-.804 1.785-1.784 1.785h-4.089a1.791 1.791 0 0 1-1.785-1.785v-4.089c0-.98.804-1.784 1.785-1.784zm14.185 0h4.089c.981 0 1.785.804 1.785 1.784v4.089c0 .989-.804 1.785-1.785 1.785h-4.089c-.98 0-1.784-.804-1.784-1.785v-4.089a1.78 1.78 0 0 1 1.784-1.784zm14.178 0h4.089c.98 0 1.785.804 1.785 1.784v4.089c0 .989-.805 1.785-1.785 1.785h-4.089a1.793 1.793 0 0 1-1.793-1.785v-4.089a1.804 1.804 0 0 1 1.793-1.784zm14.178 0h4.089c.988 0 1.793.804 1.793 1.784v4.089c0 .989-.805 1.785-1.793 1.785h-4.089a1.791 1.791 0 0 1-1.785-1.785v-4.089c0-.98.804-1.784 1.785-1.784zm-42.022 15.459h4.089c.98 0 1.785.804 1.785 1.785v4.097c0 .98-.805 1.785-1.785 1.785h-4.089a1.787 1.787 0 0 1-1.785-1.785v-4.089a1.783 1.783 0 0 1 1.785-1.793zm14.178 0h4.089c.98 0 1.784.804 1.784 1.785v4.097c0 .98-.804 1.785-1.784 1.785h-4.089a1.792 1.792 0 0 1-1.785-1.785v-4.089a1.782 1.782 0 0 1 1.785-1.793zm14.177 0h4.089c.989 0 1.793.804 1.793 1.785v4.097c0 .98-.804 1.785-1.793 1.785h-4.089c-.98 0-1.785-.805-1.785-1.785v-4.089c0-.989.805-1.793 1.785-1.793zm-14.689-32.067h4.089c.981 0 1.785.804 1.785 1.785v4.089c0 .988-.804 1.784-1.785 1.784h-4.089a1.79 1.79 0 0 1-1.784-1.784v-4.089a1.78 1.78 0 0 1 1.784-1.785zm14.178 0h4.089c.98 0 1.785.804 1.785 1.785v4.089c0 .988-.805 1.784-1.785 1.784h-4.089a1.793 1.793 0 0 1-1.793-1.784v-4.089a1.804 1.804 0 0 1 1.793-1.785z"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<path
				d="M631.567 518.31H154.485c-13.925 0-25.217-11.292-25.217-25.217V194.169c0-13.924 11.292-25.217 25.217-25.217h477.082c13.925 0 25.217 11.293 25.217 25.217v298.924c0 13.925-11.292 25.217-25.217 25.217z"
				fill={$dark ? '#0f172a' : '#f5f5f5'}
				stroke={$dark ? '#1e293b' : '#e2e8f0'}
				stroke-width="4.518"
				class="fill-neutral-100 stroke-slate-200 dark:fill-slate-900 dark:stroke-slate-800"
			/>
			<path
				d="M656.784 201.901H129.268v-7.732c0-13.924 11.292-25.217 25.217-25.217h477.082c13.925 0 25.217 11.293 25.217 25.217v7.732z"
				fill={$dark ? '#0f172a' : '#f5f5f5'}
				stroke={$dark ? '#1e293b' : '#e2e8f0'}
				stroke-width="4.518"
				class="fill-neutral-100 stroke-slate-200 dark:fill-slate-900 dark:stroke-slate-800"
			/>
			<path
				d="M153.553 190.414a5.084 5.084 0 1 0 0-10.167 5.084 5.084 0 0 0 0 10.167zm20.333 0a5.083 5.083 0 1 0 0-10.167 5.083 5.083 0 0 0 0 10.167zm20.897 0c3.119 0 5.647-2.276 5.647-5.083 0-2.808-2.528-5.083-5.647-5.083-3.12 0-5.648 2.275-5.648 5.083 0 2.807 2.528 5.083 5.648 5.083z"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<path
				d="M744.523 431.334H267.442c-13.925 0-25.218-11.293-25.218-25.218V107.193c0-13.925 11.293-25.218 25.218-25.218h477.081c13.925 0 25.218 11.293 25.218 25.218v298.923c0 13.925-11.293 25.218-25.218 25.218z"
				fill={$dark ? '#0f172a' : '#f5f5f5'}
				stroke={$dark ? '#1e293b' : '#e2e8f0'}
				stroke-width="4.518"
				class="fill-neutral-100 stroke-slate-200 dark:fill-slate-900 dark:stroke-slate-800"
			/>
			<path
				d="M769.741 114.924H242.224v-7.731c0-13.925 11.293-25.218 25.218-25.218h477.081c13.925 0 25.218 11.293 25.218 25.218v7.731z"
				fill={$dark ? '#0f172a' : '#f5f5f5'}
				stroke={$dark ? '#1e293b' : '#e2e8f0'}
				stroke-width="4.518"
				class="fill-neutral-100 stroke-slate-200 dark:fill-slate-900 dark:stroke-slate-800"
			/>
			<path
				d="M266.51 103.437a5.083 5.083 0 1 0 0-10.165 5.083 5.083 0 0 0 0 10.165zm20.332 0a5.083 5.083 0 1 0 0-10.165 5.083 5.083 0 0 0 0 10.165zm20.897 0c3.119 0 5.648-2.275 5.648-5.083 0-2.807-2.529-5.083-5.648-5.083-3.119 0-5.648 2.276-5.648 5.083 0 2.808 2.529 5.083 5.648 5.083z"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<rect
				x="446.676"
				y="283.635"
				width="250.008"
				height="16.461"
				rx="8.231"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<rect
				x="446.676"
				y="330.962"
				width="250.008"
				height="16.461"
				rx="8.231"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<rect
				x="446.676"
				y="235.596"
				width="212.358"
				height="16.944"
				rx="8.472"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<rect
				x="446.676"
				y="185.896"
				width="261.325"
				height="16.461"
				rx="8.231"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<circle
				cx="325.234"
				cy="232.47"
				r="6.725"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				stroke={$dark ? '#1e293b' : '#e2e8f0'}
				stroke-width="4.203"
				class="fill-slate-200 stroke-slate-200 dark:fill-slate-800 dark:stroke-slate-800"
			/>
			<path
				d="M393.323 244.808a48.685 48.685 0 0 0-6.989-.568c-14.109-.102-27.552 6.084-36.776 16.923-9.225 10.839-13.301 25.24-11.153 39.396"
				stroke={$dark ? '#1e293b' : '#e2e8f0'}
				stroke-width="11.348"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="stroke-slate-200 dark:stroke-slate-800"
			/>
			<path
				clip-rule="evenodd"
				d="M395.845 248.022v0a54.218 54.218 0 0 1-54.219 54.219v0a54.22 54.22 0 0 1-54.219-54.219v0a54.22 54.22 0 0 1 15.879-38.34 54.223 54.223 0 0 1 38.34-15.88v0a54.222 54.222 0 0 1 38.34 15.88 54.22 54.22 0 0 1 15.879 38.34z"
				stroke={$dark ? '#1e293b' : '#e2e8f0'}
				stroke-width="11.348"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="stroke-slate-200 dark:stroke-slate-800"
			/>
			<circle
				r="10.166"
				transform="matrix(1 0 0 -1 177.839 373.403)"
				fill={$dark ? '#dbeafe' : '#1E3A8A'}
				class="fill-blue-900 dark:fill-blue-100"
			/>
			<circle
				cx="189.7"
				cy="281.344"
				r="10.731"
				transform="rotate(-180 189.7 281.344)"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<circle
				r="10.731"
				transform="matrix(-1 0 0 1 274.417 483.536)"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<rect
				x="158.637"
				y="483.368"
				width="40.499"
				height="4.718"
				rx="2.359"
				transform="rotate(-45 158.637 483.368)"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<rect
				x="174.164"
				y="483.479"
				width="15.037"
				height="4.718"
				rx="2.359"
				transform="rotate(-45 174.164 483.479)"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<rect
				x="227.924"
				y="133.91"
				width="26.24"
				height="3.057"
				rx="1.529"
				transform="rotate(135 227.924 133.91)"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<rect
				x="217.863"
				y="133.838"
				width="9.743"
				height="3.057"
				rx="1.529"
				transform="rotate(135 217.863 133.838)"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="m391.162 489.151-29.757-95.431c-3.138-10.067 7.128-19.088 16.654-14.628l88.746 41.592c10.517 4.927 8.748 20.462-2.61 22.869l-36.535 7.761-13.555 38.266c-3.903 10.987-19.466 10.684-22.943-.429z"
				fill={$dark ? '#dbeafe' : '#1E3A8A'}
				class="fill-blue-900 dark:fill-blue-100"
			/>
			<circle
				r="8.472"
				transform="scale(-1 1) rotate(30 -1183.22 -893.139)"
				fill={$dark ? '#dbeafe' : '#1E3A8A'}
				class="fill-blue-900 dark:fill-blue-100"
			/>
			<circle
				r="8.472"
				transform="scale(-1 1) rotate(30 -807.035 -1217.592)"
				fill={$dark ? '#dbeafe' : '#1E3A8A'}
				class="fill-blue-900 dark:fill-blue-100"
			/>
			<circle
				r="6.35"
				transform="scale(1 -1) rotate(-30 -539.895 -752.64)"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
			<circle
				cx="730.285"
				cy="389.305"
				r="14.949"
				transform="rotate(-150 730.285 389.305)"
				fill={$dark ? '#1e293b' : '#e2e8f0'}
				class="fill-slate-200 dark:fill-slate-800"
			/>
		</svg>
	</div>
</section>

<section class="flex h-screen w-full flex-col justify-center gap-10 lg:items-center">
	<h1 class="text-3xl  md:text-4xl xl:text-5xl">{$LL.MAIN.OUR_SERVICES.TITLE()}</h1>

	<div class="flex w-full flex-col justify-around lg:flex-row lg:items-center">
		{#each services as service}
			<div class="rounded py-5 lg:h-[75%]  lg:max-w-[30%] lg:px-10">
				<p class="font-normal text-slate-600">0{service + 1}</p>
				<h3 class="mb-3 font-bold">{$LL.MAIN.OUR_SERVICES.SERVICES[service].TITLE()}</h3>

				<p class="mb-7">{$LL.MAIN.OUR_SERVICES.SERVICES[service].DESCRIPTION()}</p>

				<button
					class="float-left w-fit rounded-md bg-neutral-200 py-2 px-5 transition-shadow duration-300 hover:shadow-xl active:shadow-none dark:bg-slate-800"
				>
					{$LL.MAIN.LEARN_MORE()}
				</button>
			</div>
		{/each}
	</div>
</section>

<section class="flex h-screen w-full flex-col justify-center gap-10 lg:items-center">
	<h1 class="mb-5 text-3xl  md:text-4xl xl:text-5xl">
		{$LL.MAIN.OUR_WORK.TITLE()}
	</h1>

	<div class="flex gap-4 p-5">
		{#each data.works as work}
			<div class="flex flex-col gap-4">{JSON.stringify(work)}</div>
		{/each}
	</div>
</section>

<style>
	@supports (-webkit-touch-callout: none) {
		main {
			margin-top: 3.5rem /* 56px */;
		}
	}
</style>
