import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/portfolio.module.scss'


const PortfolioPage = () => (
        <div className={styles.pagecontent}>
      <h1 className={styles.title}><span className={styles.pink}>Our</span> portfolio</h1>
        <h3><br />Here are a few of the weddings that we have been so lucky to photograph!</h3>
        <p>We are currently updating our website and migrating these images.. </p>
        <Link to="/">Go back to the homepage</Link>
    </div>
)


export default PortfolioPage

