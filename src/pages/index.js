import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
	const posts = data.allMarkdownRemark.edges
	return (
		<div>
			<h1>Posts</h1>
			<p>We got posts! Check 'em out here:</p>
			<ul>
				{posts.map(({ node: { fields, frontmatter } }) => (
					<li>
						<Link to={fields.slug}>{frontmatter.title}</Link>
						<br />
						{frontmatter.excerpt}
					</li>
				))}
			</ul>
		</div>
	)
}

export default IndexPage

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { draft: { ne: true } } }
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						excerpt
						date(formatString: "MMMM DD, YYYY")
					}
				}
			}
		}
	}
`
