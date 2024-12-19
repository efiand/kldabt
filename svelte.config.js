import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: true
	},
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		alias: {
			'@': 'src'
		},
		paths: {
			base: ''
		}
	},
	preprocess: vitePreprocess()
};

export default config;
