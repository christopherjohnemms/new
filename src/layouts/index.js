import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from "gatsby-image";
import '../assets/fonts.css';
import Header from '../components/header/header'
import styles from '../assets/index.module.scss'



const Layout = ({ children, data }) => (
  <div >
    
        <Helmet>
        
             <title>{data.site.siteMetadata.title}</title>
              <meta description="Two passionate wedding photographers in Staffordshire UK, specialising in unique creative wedding photojournalism and documentary wedding photography" />
                <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png" />
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114.png"  />
                <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png"  />
                <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png"  />
                <link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png"  />
                <link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120.png"  />
                <link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png" />
                <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png"  />
                <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
                <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
                <link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />
                <meta name="Ember Photography" content="&nbsp;" />
                <meta name="msapplication-TileColor" content="#FFFFFF" />
                <meta name="msapplication-TileImage" content="mstile-144x144.png" />
                <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
                <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
                <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
                <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
        
        </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} HeaderImage={data.HeaderImage}   />
     test
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    HeaderImage: imageSharp(id: { regex: "header/ember_logo.png/" }) {
      sizes(maxWidth: 150, quality:90 ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    },
    FacebookIcon: imageSharp(id: { regex: "home/fb.png/" }) {
      sizes(maxWidth: 64 ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    },
    InstagramIcon: imageSharp(id: { regex: "home/insta.png/" }) {
      sizes(maxWidth: 64 ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    },
    ContactIcon: imageSharp(id: { regex: "home/mail.png/" }) {
      sizes(maxWidth: 64 ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    },
    

  }
`
