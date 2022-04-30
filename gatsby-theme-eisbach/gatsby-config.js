module.exports = (options) => ({
  plugins: [
    {
      resolve: `@vinckr/gatsby-theme-eisbach-core`,
      options,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-theme-ui`,
  ],
})
