export async function handle({ event, resolve }) {
	const base = import.meta.env.PROD ? 'https://benfords-law-explainer.netlify.app/' : '';
	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('%baseURL%', base);
		}
	});
}
