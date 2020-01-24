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
          families: ["Abril Fatface", "Muli:300 bolder 900"],
        },
      },
    },
  ],
}
