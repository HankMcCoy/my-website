module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter',
	},
	plugins: [
		'gatsby-plugin-catch-links',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 740,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-copy-linked-files`,
					{
						resolve: `gatsby-remark-smartypants`,
						options: {
							dashes: `oldschool`,
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-autolink-headers`,
					`gatsby-remark-katex`,
				],
			},
		},
		'gatsby-transformer-yaml',
		'gatsby-plugin-sharp',
		'gatsby-plugin-catch-links',
		'gatsby-plugin-glamor',
	],
}
