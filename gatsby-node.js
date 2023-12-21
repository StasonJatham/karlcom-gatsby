const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

    result.data.allMarkdownRemark.nodes.forEach((node) => {
        createPage({
            path: `/blog/${node.frontmatter.slug}`,
            component: path.resolve(`./src/pages/blog/post.js`),
            context: {
                id: node.id,
            },
        });
    });
};
