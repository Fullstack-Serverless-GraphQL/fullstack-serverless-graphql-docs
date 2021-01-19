module.exports = {
  siteMetadata: {
    title: `Fullstack Serverless GraphQL`,
    description: `Fullstack Serverless GraphQL enables you to master GraphQL on AWS Lambda, while showing you how create bleeding edge frontends in React or Vue.`,
    author: `Amo Moloko`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fullstack Serverless GraphQL`,
        short_name: `FSGQL`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content && code`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.GATSBY_MAILCHIMP, // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
