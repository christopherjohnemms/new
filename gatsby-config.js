module.exports = {
  siteMetadata: {
    title: '__',
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-plugin-sass',
            'gatsby-transformer-sharp',
            'gatsby-plugin-sharp',
            `gatsby-transformer-remark`,
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
                  name: `data`,
                  path: `${__dirname}/src/data/`
                }
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
