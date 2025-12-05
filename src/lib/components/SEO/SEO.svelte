<script>
	import { base } from '$app/paths';

	/**
	 * Base URL of the website.
	 * @type {string}
	 */
	export let baseUrl = 'https://benfords-law-explainer.netlify.app/';

	/**
	 * URL of the current page.
	 * @type {URL | null}
	 */
	export let pageUrl = 'https://benfords-law-explainer.netlify.app/';

	/**
	 * Title for SEO purposes.
	 * @type {string}
	 */
	export let seoTitle = "Benford's Law: A visual explainer";

	/**
	 * Description for SEO purposes.
	 * @type {string}
	 */
	export let seoDesc = 'An exploration of how real-world data often deviates from randomness';

	/**
	 * Path to the image used for sharing.
	 * @type {string}
	 */
	export let shareImg = 'https://benfords-law-explainer.netlify.app/socials-image.jpg';

	/**
	 * Alternative text for the sharing image.
	 * @type {string}
	 */
	export let shareAlt = "Benford's Law: A visual explainer";

	/**
	 * Publication date of the article or page.
	 * @type {string}
	 */
	export let pubDate = '';

	/**
	 * Last update date of the article or page.
	 * @type {string}
	 */
	export let updateDate = '';
	/**
	 * List of keywords associated with the page.
	 * @type {Array<string>}
	 */
	export let keywords = [];

	/**
	 * Name of the website.
	 * @type {string}
	 */
	export let siteName = '';

	/**
	 * Twitter username associated with the page.
	 * @type {string}
	 */
	export let twitter = 'schubertda1';

	let canonUrl;
	/**
	 * Calculates origin from base URL.
	 * @param base - Base URL
	 * @returns Origin URL
	 */
	const getOriginURL = (base) => {
		try {
			return new URL(base).origin;
		} catch {
			if (typeof window !== 'undefined') return getOriginURL(window.location.href);
			return '';
		}
	};

	let locale = 'en';

	/** Calculated Origin */
	$: origin = getOriginURL(baseUrl);

	/** Canonical URL */
	$: if (pageUrl) {
		canonUrl = origin.replace(/index\.html\/$/, '');
	}

	/** Structured Data for SEO */
	$: structuredData = {
		'@context': 'http://schema.org',
		'@type': 'Article',
		headline: seoTitle,
		url: canonUrl,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': canonUrl
		},
		thumbnailUrl: shareImg,
		image: [
			{
				'@context': 'http://schema.org',
				'@type': 'ImageObject',
				url: shareImg
			}
		],
		dateCreated: pubDate,
		datePublished: pubDate,
		dateModified: updateDate,
		keywords: keywords
	};
</script>

<svelte:head>
	{#key canonUrl}
		<title>{seoTitle}</title>
		<meta name="description" content={seoDesc} />
		<link rel="canonical" href={baseUrl} />

		<meta property="og:locale" content={locale} />
		<meta property="og:url" content={baseUrl} />
		<meta property="og:type" content="article" />
		<meta property="og:title" content={seoTitle} itemprop="name" />
		<meta property="og:description" content={seoDesc} itemprop="description" />
		<meta
			property="og:image"
			content="https://benfords-law-explainer.netlify.app/socials-image.jpg"
			itemprop="image"
		/>
		<meta property="og:site_name" content={siteName} />

		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@{twitter}" />
		<meta name="twitter:creator" content="@{twitter}" />
		<meta name="twitter:domain" content={baseUrl} />
		<meta name="twitter:title" content={seoTitle} />
		<meta name="twitter:description" content={seoDesc} />
		<meta name="twitter:image" content={shareImg} />

		{#if shareAlt}
			<meta name="twitter:image:alt" content={shareAlt} />
		{/if}

		{@html `<${'script'} type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
	{/key}
</svelte:head>
