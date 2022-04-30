const withDefaults = require(`./utils/default-options`)

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions)

  return {
    siteMetadata: {
      siteTitle: `eisbach`,
      siteTitleAlt: `eisbach - @vinckr/gatsby-theme-eisbach-core`,
      siteHeadline: `eisbach - Gatsby Theme from @vinckr`,
      siteUrl: `https://eisbachcallin.com`,
      siteDescription: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI. Includes Light/Dark mode.`,
      siteLanguage: `en`,
      siteImage: `/banner.jpg`,
      author: `@vinckr_de`,
      basePath: options.basePath,
      projectsPath: options.projectsPath,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.projectsPath,
          path: options.projectsPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.assetsPath,
          path: options.assetsPath,
        },
      },
      options.mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          lessBabel: true,
        },
      },
      `gatsby-transformer-sharp`,
      options.sharp && {
        resolve: `gatsby-plugin-sharp`,
        options: {},
      },
    ].filter(Boolean),
  }
}
