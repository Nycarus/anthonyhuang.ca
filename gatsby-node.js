exports.createPages = async ({actions, graphql, reporter}) => {
    const path = require('path');

    const result = await graphql(`
        {
            allProjectJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild("There is a problem loading the project data.");
        return;
    }

    result.data.allProjectJson.edges.forEach(({node}) => {
        actions.createPage({
            path:`/projects/${node.slug}`,
            component: path.resolve("./src/templates/standardProjectTemplate.js"),
            context: { 
                slug: node.slug 
            }
        });
    });
}