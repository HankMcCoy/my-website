import React from "react";
import Link from "gatsby-link";
import { Div, H1 } from "glamorous";

class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    return (
      <div>
        <H1 marginTop="0">{post.frontmatter.title}</H1>

        <Div dangerouslySetInnerHTML={{ __html: post.html }} maxWidth="900px" />
      </div>
    );
  }
  componentDidMount() {
    const embedEl = document.getElementById("embed-script");
    if (embedEl) {
      const src = embedEl.dataset.script;
      const scriptEl = document.createElement("script");
      scriptEl.src = src;
      document.body.appendChild(scriptEl);
    }
  }
}

export default BlogPostRoute;

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
`;
