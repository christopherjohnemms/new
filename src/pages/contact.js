import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/contact.module.scss'


const ContactPage = () => (
    <div>
        <div className={styles.pagecontent}>
            <h1>We <span className={styles.pink}>can't wait</span> to hear from you</h1>
            <h2>Use the form below to drop us a message, whether its an 
                enquiry or a friendly chat, we don't mind! </h2>
            
             <div>
            
                <p>For all enquiries or questions, please don't hesitate to use the form on this page to instantly get in contact with us through email.</p>
                
                <p>If you'd like to get in contact with us in other ways, then we have our own Facebook page which you can message us on, or alternatively you can drop us a message on our Instagram page.</p>
                
                <p>If you prefer to contact us by phone, please give us a call on 07972345095. If we are busy or unable to take your call at that moment, please use the voicemail service and let us know your details so we can get back to you as soon as possible!</p>
            </div>
        </div>
        
        <div className={styles.pagecontentwide}>
            <div className={styles.pcontent}>
            <div className={styles.formcontent}>
            
           
            
            <div className={styles.padding}>
                <form name="contact" action="/thanks/" method="POST"  netlify-honeypot="bot-field" data-netlify="true">
                     <p className={styles.hidden}>
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                      </p>
                        <input type="hidden" name="form-name" value="contact" />
                     <p>
                        <label>Your Name <br /> <input type="text" name="name" /></label>   
                      </p>
                        <p>
                        <label>Your Email <br /><input type="email" name="email" /></label>
                      </p>
                      <p>
                        <label>Phone Number<br /> <input type="text" name="phone" /></label>
                      </p>
                     <p>
                        <label>Wedding Date (if you have one!)<br /> <input type="text" name="wedding_date" /></label>
                      </p>
                        <p>
                        <label>Location (if you have one!) <br /><input type="text" name="location" /></label>
                      </p>
                      <p>
                        <label>What kind of photography are you looking for?<br /> <textarea name="message"></textarea></label>
                    </p>
                      <p>
                        <button>Send</button>
                      </p>

                </form>
            </div>
        </div>
            
            
            </div>
        </div>
        <div className={styles.title}>
        <div className={styles.pagecontent}>
                        <Link to="/thanks">Go back to the homepage</Link>

        </div>
        </div>
        
    
        
    </div>
    
    
)


export default ContactPage

