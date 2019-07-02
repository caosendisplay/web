const path = require('path');
const locales = require('./src/constants/locales');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
      ? page.path
      : locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          ...page.context,
          locale: lang
        }
      })
    })

    resolve()
  })
}

// Create pages from markdown files
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
//   return new Promise((resolve, reject) => {
//     resolve(
//       graphql(
//         `
//           query {
//             services: allMarkdownRemark(
//               filter: { fileAbsolutePath: { regex: "/services/" } }
//               sort: { fields: [frontmatter___date], order: DESC }
//             ) {
//               edges {
//                 node {
//                   id
//                   frontmatter {
//                     path
//                     title
//                     date(formatString: "DD MMMM YYYY")
//                   }
//                   excerpt
//                 }
//               }
//             }
//             team: allMarkdownRemark(
//               filter: { fileAbsolutePath: { regex: "/team/" } }
//               sort: { fields: [frontmatter___date], order: DESC }
//             ) {
//               edges {
//                 node {
//                   id
//                   frontmatter {
//                     path
//                     title
//                     date(formatString: "DD MMMM YYYY")
//                   }
//                   excerpt
//                 }
//               }
//             }
//             testimonials: allMarkdownRemark(
//               filter: { fileAbsolutePath: { regex: "/testimonials/" } }
//               sort: { fields: [frontmatter___date], order: DESC }
//             ) {
//               edges {
//                 node {
//                   id
//                   frontmatter {
//                     path
//                     title
//                     date(formatString: "DD MMMM YYYY")
//                   }
//                   excerpt
//                 }
//               }
//             }
//           }
//         `,
//       ).then((result) => {
//         Object.keys(locales).map(lang => {
//           const pathPrefix = locales[lang].default ? '' : locales[lang].path;
//           result.data.services.edges.forEach(({ node }) => {
//             const component = path.resolve('src/templates/service.js');
//             createPage({
//               path: pathPrefix + node.frontmatter.path,
//               component,
//               context: {
//                 locale: lang,
//                 id: node.id,
//               },
//             });
//           });
//           result.data.team.edges.forEach(({ node }) => {
//             const component = path.resolve('src/templates/team.js');
//             createPage({
//               path: pathPrefix + node.frontmatter.path,
//               component,
//               context: {
//                 locale: lang,
//                 id: node.id,
//               },
//             });
//           });
//           result.data.testimonials.edges.forEach(({ node }) => {
//             const component = path.resolve('src/templates/testimonial.js');
//             createPage({
//               path: pathPrefix + node.frontmatter.path,
//               component,
//               context: {
//                 locale: lang,
//                 id: node.id,
//               },
//             });
//           });
//         });
//         resolve();
//       }),
//     );
//   });
// };
