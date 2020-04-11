module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `This is my portfolio website to display my work.`,
    author: `@Luke Netti`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Abril Fatface", "Muli:100, 300 bolder 900", "Raleway:300"],
        },
      }
    },
    {
      resolve: "gatsby-source-graphql",
          options: {
          // The top level query type, can be anything you want!
          typeName: "GCMS",
          // The field you'll query against, can also be anything you want.
          fieldName: "gcms",
          // Your API endpoint, available from the dashboard and settings window.
          // You can use this endpoint that features US mountains for now.
          url: "https://api-us-east-1.graphcms.com/v2/ck8t64wop04og01xp5x7m4ej4/master",
      },
  },
  ],
}
