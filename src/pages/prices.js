import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/prices.module.scss'


const PricesPage = () => (
    <div className={styles.pagecontent}>
        <h1>Prices Page</h1>
        <p>Lorem Ipsum</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
)


export default PricesPage

