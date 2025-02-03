import type { Handle } from '@sveltejs/kit';

import * as amp from '@sveltejs/amp';

import { minifyInternal } from './lib/minify';

async function handle({ event, resolve }: Parameters<Handle>[0]) {
	const isAmp = event.route.id?.includes('/amp');
	let buffer = '';

	return await resolve(event, {
		transformPageChunk({ done, html }) {
			if (!isAmp) {
				return html;
			}

			buffer += html;

			if (!done) {
				return html;
			}

			return minifyInternal(
				amp
					.transform(buffer)
					.replace('<html', '<html amp')
					.replace('@charset "UTF-8";', '')
					.replace(/<!--.*?-->/g, '')
			);
		}
	});
}

export { handle };
