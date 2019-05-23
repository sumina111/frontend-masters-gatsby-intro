import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug }, type: { eq: "product" } }) {
      frontmatter {
        title
        author
        price
      }
      code {
        body
      }
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer>{post.code.body}</MDXRenderer>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Price: {post.frontmatter.price}
      </p>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  );
};

export default PostTemplate;
