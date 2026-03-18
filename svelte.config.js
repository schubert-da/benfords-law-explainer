import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        alias: {
            $components: 'src/lib/components',
            $assets: 'src/lib/assets',
            $utils: 'src/lib/utils'
        }
    }
};

export default config;
