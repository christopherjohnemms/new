import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/contact.module.scss'


const ContactPage = () => (
    <div className={styles.pagecontent}>
        <h1>Contact Page</h1>
        <p>Lorem Ipsum</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
)


export default ContactPage

