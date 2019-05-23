import { graphql, useStaticQuery } from 'gatsby';

const usePhotos = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "product" } } }) {
        nodes {
          frontmatter {
            title
            slug
            price
            type
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(posts => ({
    title: posts.frontmatter.title,
    slug: posts.frontmatter.slug,
    price: posts.frontmatter.price,
    excerpt: posts.excerpt,
  }));
};

export default usePhotos;
