module.exports = {
  siteMetadata: {
    title: 'Learning nervos site'
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    'gatsby-source-react-error-codes',
    'gatsby-transformer-authors-yaml',
    'gatsby-transformer-home-example-code',
    'gatsby-plugin-netlify',
    'gatsby-plugin-glamor',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#61dafb',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 840,
            },
          },
          'gatsby-remark-header-custom-ids',
          'gatsby-remark-use-jsx',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'gatsby-code-',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-41298772-1',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
  ],
};
