const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        graphql(`
           {
            allContentfulEvo {
              edges {
                node {
                  id
                  slug
                  model
                }
              }
            }
          }
    `).then(result => {
            if (result.errors) {
                reject(result.errors);
            }
            result.data.allContentfulEvo.edges.forEach((edge) => {
                createPage({
                    path: `/evo/${edge.node.slug}`,
                    component: path.resolve(`./src/templates/evo-post.js`),
                    context: {
                        slug: edge.node.slug
                    }
                })
            })
            resolve();
        })
    });
};