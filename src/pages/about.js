import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/about.module.scss'


const AboutPage = () => (
    <div className={styles.pagecontent}>
        <h1>About Page</h1>
        <p>Lorem Ipsum</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
)


export default AboutPage

