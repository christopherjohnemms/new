module.exports = {
  siteMetadata: {
    title: '__',
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-plugin-sass',
            'gatsby-transformer-sharp',
            `gatsby-transformer-remark`,
              `gatsby-plugin-sharp`,
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
            
           ],
}
