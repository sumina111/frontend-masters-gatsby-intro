import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-mdx';
import Layout from '../components/layout';
import Images from '../components/images';
import ReadLink from '../components/read-link';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug }, type: { eq: "blog" } }) {
      frontmatter {
        title
        author
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        images {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          sourceInstanceName
        }
      }
      code {
        body
      }
    }
  }
`;
let img = 1;
const PostTemplate = ({ data: { mdx: post }, pageContext }) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Posted by({post.frontmatter.author})
      </p>
      <Images
        image1={post.frontmatter.images[0]}
        image2={post.frontmatter.images[1]}
        image3={post.frontmatter.images[2]}
      />

      {/* {post.frontmatter.images} = {post.frontmatter.image.sharp.fluid} */}
      <MDXRenderer>{post.code.body}</MDXRenderer>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  );
};

export default PostTemplate;
