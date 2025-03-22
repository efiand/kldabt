<script lang="ts">
	import { PROJECT_NAME } from '@/lib/constants';
	import { typewriter } from '@/lib/transitions';
	import { onMount } from 'svelte';

	import Nav from './Nav.svelte';

	let { isAmp = false } = $props();
	let showTitle = $state(false);

	onMount(function () {
		showTitle = true;
	});
</script>

<section class="hero">
	{#if import.meta.env.SSR || showTitle}
		<h1 class="hero__title">
			<span in:typewriter data-hidden>{PROJECT_NAME}</span>
		</h1>
	{/if}
	<Nav {isAmp} />
</section>
