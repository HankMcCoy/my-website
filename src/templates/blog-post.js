import React from 'react'
import Link from 'gatsby-link'

class BlogPostRoute extends React.Component {
	render() {
		const post = this.props.data.markdownRemark

		return (
			<div>
				<header>
					<h1>{post.frontmatter.title}</h1>
				</header>

				<div dangerouslySetInnerHTML={{ __html: post.html }} className="post" />
			</div>
		)
	}
}

export default BlogPostRoute

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			timeToRead
			tableOfContents
			fields {
				tagSlugs
			}
			frontmatter {
				title
				tags
				date(formatString: "MMMM DD, YYYY")
			}
		}
	}
`
