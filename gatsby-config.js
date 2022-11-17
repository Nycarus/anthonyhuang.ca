module.exports = {
  siteMetadata: {
    title: `Anthony Huang's Website`,
    siteUrl: `https://www.anthonyhuang.ca/`,
    description: `Anthony Huang's personal portfolio and blog website`,
    author: `Anthony Huang`,
  },
  plugins: [
    `gatsby-theme-material-ui`,
    "gatsby-plugin-styled-components",
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './res'
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`,`/projects/*`],
      },
    },
  ],
  flags:{
    DEV_SSR: true
  }
};