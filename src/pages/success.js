import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/contact.module.scss'


const SuccessPage = () => (
    <div className={styles.pagecontent}>
        <h1>We <span className={styles.pink}>can't wait</span> to hear from you</h1>
        
        <div className={styles.formcontent}>
            <div className={styles.formsuccess}>
                <p>Thank you for your message, we will get back to you as soon as we can!</p>
                
                        <Link to="/">Go back to the homepage</Link>

            </div>
        </div>
    </div>
)


export default SuccessPage

