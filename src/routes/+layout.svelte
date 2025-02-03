<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import '@/scss/index.scss';
	import Hero from '@/components/Hero.svelte';
	import Nav from '@/components/Nav.svelte';
	import {
		BASE_URL,
		DESCRIPTIONS,
		PROJECT_NAME,
		TITLES
	} from '@/lib/constants';
	import { minifyInternal } from '@/lib/minify';
	import { hitYM } from '@/lib/ym';

	let { children } = $props();
	let id = $derived(
		page.params.id ? `/${page.params.id}` : page.route.id!.replace('/amp', '')
	);
	let title = $derived(TITLES[`${id}`] || '');
	let url = $derived(`${BASE_URL}${page.url.pathname}`);
	let description = $derived(
		DESCRIPTIONS[`${id}`] ||
			`Современная бытовая сказка о деде Андрее и бабке Тане «${title}».`
	);
	let content = $derived(page.params.id ? (page.data[id] as string) : '');
	let isAmp = $derived(page.route.id?.includes('/amp') || false);

	afterNavigate(function () {
		hitYM();
	});
</script>

<svelte:head>
	<title>{[PROJECT_NAME, title].join('. ')}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="{BASE_URL}{id}" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />

	{#if id === '/'}
		<meta name="yandex-verification" content="cb168677250fc238" />
		<meta
			name="google-site-verification"
			content="yBKIbN0igd4HXvH8JwDMU0fzuShqlRHBT0OmI0nZgZ8"
		/>
	{/if}

	{#if !isAmp}
		<link rel="amphtml" href="{BASE_URL}/amp{page.url.pathname}" />
	{/if}
</svelte:head>

{#if title}
	<main class="main">
		<section class="main__section">
			<h1>{title}</h1>
			{@html minifyInternal(content)}
			{@render children()}
		</section>

		{#if id !== '/soderzhanie'}
			<Nav {isAmp} />
		{/if}
	</main>
{:else}
	<Hero {isAmp} />
{/if}
