<script lang="ts">
	import { projectName } from '@/lib/constants';
	import { typewriter } from '@/lib/transitions';
	import { onMount } from 'svelte';

	import Nav from './Nav.svelte';

	let showTitle = $state(false);

	onMount(function () {
		showTitle = true;
	});
</script>

<section>
	{#if import.meta.env.SSR || showTitle}
		<h1>
			<span in:typewriter>{projectName}</span>
		</h1>
	{/if}
	<Nav />
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 36px;
		box-sizing: border-box;
		max-width: 928px;
		min-height: 100vh;
		margin: 0 auto;
		padding: 48px;
		background-color: #faf5ee;
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
	}

	h1 {
		min-height: 48px;
		margin: 0;
	}
</style>
