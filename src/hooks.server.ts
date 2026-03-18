import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => {
			if (process.env.NODE_ENV === 'production') {
				return html.replace('%baseURL%', 'https://benfords-law-explainer.netlify.app/');
			}
			return html.replace('%baseURL%', '/');
		}
	});
};
