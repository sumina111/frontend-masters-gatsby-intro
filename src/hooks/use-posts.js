import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { order: DESC, fields: frontmatter___feature }
        limit: 5
        filter: { frontmatter: { type: { eq: "blog" }, feature: { ne: 0 } } }
      ) {
        nodes {
          excerpt
          frontmatter {
            title
            price
            slug
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            type
            feature
            date
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    // images: post.frontmatter.images,
    excerpt: post.excerpt,
  }));

  // return data;
};

export default usePosts;
