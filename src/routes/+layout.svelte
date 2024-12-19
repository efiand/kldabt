<script lang="ts">
	import { page } from '$app/state';
	import '@/scss/index.scss';
	import Hero from '@/components/Hero.svelte';
	import Nav from '@/components/Nav.svelte';
	import { projectName, titles } from '@/lib/constants';

	let { children } = $props();
	let title = $derived(titles[`${page.route.id}`] || '');
</script>

<svelte:head>
	<title>{[projectName, title].join('. ')}</title>

	{#if page.route.id === '/'}
		<meta name="yandex-verification" content="cb168677250fc238" />
		<meta
			name="google-site-verification"
			content="zkOZPCQiB-QTp7eV1rCaEASRX4bEelb5Z1XqXfC5IX0"
		/>
	{/if}
</svelte:head>

{#if title}
	<main>
		<section>
			<h1>{title}</h1>

			{@render children()}
		</section>

		{#if page.route.id !== '/soderzhanie'}
			<Nav />
		{/if}
	</main>
{:else}
	<Hero />
{/if}

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		gap: 36px;
		box-sizing: border-box;
		max-width: 928px;
		min-height: 100vh;
		margin: 0 auto;
		padding: 60px 24px 48px;
		background-color: #ffffff;
		background-image: linear-gradient(
			transparent 47px,
			rgba(0, 0, 128, 0.15) 48px
		);
		background-size: 48px 48px;
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);

		@include desktop {
			padding-inline: 48px;
		}
	}

	section {
		flex-grow: 1;
	}
</style>
