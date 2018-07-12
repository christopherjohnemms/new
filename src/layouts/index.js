import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from "gatsby-image";
import '../assets/fonts.css';
import Header from '../components/header/header'
import styles from '../assets/index.module.scss'



const Layout = ({ children, data }) => (
  <div >
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} HeaderImage={data.HeaderImage}  />
      <div className={styles.body}>
          {children()}
      </div>
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
      sizes(maxWidth: 150 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
