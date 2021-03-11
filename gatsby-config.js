const siteMetadata = require("./config/metadata");

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
