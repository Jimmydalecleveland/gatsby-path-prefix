module.exports = {
  siteMetadata: {
    title: "path-prefix",
    author: "Jimmy Cleveland",
  },
  pathPrefix: `/blog`,

  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
