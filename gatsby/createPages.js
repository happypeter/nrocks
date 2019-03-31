const { resolve } = require('path');

module.exports = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // Used to detect and prevent duplicate redirects
  const redirectToSlugMap = {};

  const docsTemplate = resolve(__dirname, '../src/templates/docs.js');

  // Redirect /index.html to root.
  createRedirect({
    fromPath: '/index.html',
    redirectInBrowser: true,
    toPath: '/',
  });

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                redirect
                slug
              }
            }
          }
        }
      }
    `,
  );

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);

    throw Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug;
    let template = docsTemplate;

    const createArticlePage = path =>
      createPage({
        path: path,
        component: template,
        context: {
          slug,
        },
      });

    // Register primary URL.
    createArticlePage(slug);

    // Register redirects as well if the markdown specifies them.
  });
};
