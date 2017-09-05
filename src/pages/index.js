import React from "react";
import Link from "gatsby-link";
import { Div, H1, Li, Ul } from "glamorous";

import Spacer from "../components/spacer";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <div>
      <H1 marginTop="0">Posts</H1>
      <Ul listStyle="none" padding="0" margin="0">
        {posts.map(({ node: { fields, frontmatter } }) => (
          <Li key={fields.slug} marginBottom="20px">
            <Link
              to={fields.slug}
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "24px",
                color: "#333",
                textDecoration: "none"
              }}
            >
              {frontmatter.title}
            </Link>
            <Spacer height={5} />
            <Div fontSize="16px">{frontmatter.excerpt}</Div>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

export default IndexPage;

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
`;
