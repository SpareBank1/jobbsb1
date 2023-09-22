module.exports = {
  siteMetadata: {
    title: `SpareBank 1 Utvikling`,
    titleTemplate: `%s | SpareBank 1 Utvikling`,
    description: `Dette er SpareBank 1 Utvikling, og på denne siden kan du bli bedre kjent med hvem vi er, hva vi gjør og hvordan vi jobber – gjennom oss som faktisk jobber her.`,
    author: `@antidecaf`,
    image: "/images/sb1miljo.jpg",
    url: "https://sparebank1.dev",
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
        path: `${__dirname}/src/pages/static`,
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
        path: `${__dirname}/src/pages/developers`,
        name: "developers",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143149392-1",
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://medium.com/feed/sparebank1-digital`,
        name: `sb1digital`,
        parserOption: {
          customFields: {
            item: ['image:url'],
          },
        },
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
