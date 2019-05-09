module.exports = {
  siteMetadata: {
    title: `Jobbe i SpareBank 1`,
    description: `.`,
    author: `@antidecaf`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/markdown`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/employees`,
        name: "employees",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/stilling`,
        name: "stilling",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `sparebank1design`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `sparebank1utvikler`,
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `sparebank1-digital`,
        limit: 200,
      },
    },
    {
      resolve: "gatsby-source-hrmanager",
      options: {
        customerAlias: 'sparebank1'
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sb1-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 970,
              linkImagesToOriginal: false,
              quality: 85,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              ignoreFileExtensions: [],
            },
          },
        ],
      },
    },
    `gatsby-plugin-less`,
  ],
}
