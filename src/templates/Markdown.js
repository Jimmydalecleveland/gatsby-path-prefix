import React from "react";
import { graphql } from "gatsby";

const Markdown = ({ data, location }) => {
  const { markdownRemark } = data;

  return (
    <section>
      <h1>Query Params: {location.search}</h1>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <h2>{markdownRemark.frontmatter.description}</h2>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </section>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        title
      }
    }
  }
`;

export default Markdown;
