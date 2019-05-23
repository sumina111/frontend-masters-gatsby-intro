exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            type
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    if (post.frontmatter.type == 'blog') {
      actions.createPage({
        path: 'blog/' + post.frontmatter.slug,
        component: require.resolve('./src/templates/post.js'),
        context: {
          slug: post.frontmatter.slug,
        },
      });
    } else if (post.frontmatter.type == 'product') {
      actions.createPage({
        path: 'product/' + post.frontmatter.slug,
        component: require.resolve('./src/templates/picture.js'),
        context: {
          slug: post.frontmatter.slug,
        },
      });
    }
  });
};
