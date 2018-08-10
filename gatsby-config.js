module.exports = {
  siteMetadata: {
    title: 'Ember Photography | Staffordshire Wedding Photography',
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-plugin-sass',
            'gatsby-plugin-netlify-cms',
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    path: `${__dirname}/src/blog-posts`,
                    name: 'markdown-pages', 
                },
            },
                'gatsby-transformer-sharp',
                'gatsby-transformer-remark',
              'gatsby-plugin-sharp',
                {
                  resolve: `gatsby-transformer-remark`,
                  options: {
                      plugins: [
                          {
                              resolve: `gatsby-remark-images`,
                              options: {
                                  // It's important to specify the maxWidth (in pixels) of
                                  // the content container as this plugin uses this as the
                                  // base for generating different widths of each image.
                                  maxWidth: 1200,
                                  wrapperStyle: 'margin-bottom:50px',
                              },
                          },
                      ],
                  },
              },

              {
                  resolve: `gatsby-source-filesystem`,
                  options:{
                      name: `src`,
                      path: `${__dirname}/src/`
                  }
              },
             {
              resolve: `gatsby-plugin-typography`,
              options: {
                pathToConfigModule: `src/utils/typography.js`,
              },
            },
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                  name: `img`,
                  path: `${__dirname}/src/imgs/`
                }
              },
            {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-106872847-1",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
            
           ],
}
