import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/portfolio.module.scss'


const PortfolioPage = () => (
    <div className={styles.pagecontent}>
        <h1>Portfolio Page</h1>
        <p>Lorem Ipsum</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
)


export default PortfolioPage

