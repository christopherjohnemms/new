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
        
    <div className={styles.social}>
        <div>
            <p>We'd <span className={styles.pink}>love</span> for you to get in touch!</p>
        </div>
        <div className={styles.icons}>
            <div className={styles.icon}>
                <a href="https://www.facebook.com/emberphotographyuk/" target="_blank">
                    <Img
                        title="Ember Photography Facebook "
                        alt="Ember Photography Facebook"
                        sizes={data.FacebookIcon.sizes}
                    />
                </a>
            </div>
            <div className={styles.icon}>
                <a href="https://www.instagram.com/emberphotographyuk/" target="_blank">
                    <Img
                        title="Ember Photography Instagram"
                        alt="Ember Photography Instagram"
                        sizes={data.InstagramIcon.sizes}
                    />
                </a>
            </div>
            <div className={styles.icon}>
                <a href="contact">
                    <Img
                        title="Ember Photography Book Us"
                        alt="Ember Photography Book Us"
                        sizes={data.ContactIcon.sizes}
                    />
                </a>
            </div>
        </div>
    </div>
    <div className={styles.footer}>
        <div className={styles.right}>
            <p>Email: <a href="mailto:info@ember.photography">info@ember.photography</a></p>
            <p>Phone: <span>07972345095</span></p>
            <small>Copyright Ember Photography</small>
        </div>
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
