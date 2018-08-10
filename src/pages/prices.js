import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/prices.module.scss'
import Img from "gatsby-image";


const PricesPage = ({data}) => (
    <div className={styles.pagecontent}>
        <h1 className={styles.title}>What <span className={styles.pink}>we</span> can offer you</h1>
        <h3><br />From the beginning until the end, we'll be there capturing your special day</h3>
        <p> 
We believe that some of the most amazing moments unfold when everyone lets loose, hits the dancefloor with a few drinks and really celebrates two families becomming one. That's why we offer our services for the full day with both us there to capture everything using our own natural photojournalistic approach.</p>
        <p>
        Our price for the full day is: <br /><span className={styles.price}>£1195</span><br /><br />
            For this you will get:
        </p>

        <ul>
            <li>A face-to-face meetup if your location is within 100 miles of Lichfield - if not then we can organise a skype or other VOIP program to have a chat so we can get to know you and what you're looking for!</li>
            <li>A pre-wedding shoot</li>
            <li><strong>Full</strong> wedding day coverage from the start of the day until the evening reception is over</li>
            <li><strong><span className={styles.pink}>Two</span></strong> professional wedding photographers to capture those special moments</li>
            <li>High resolution images taken with the latest photography equipment</li>
            <li>Post-wedding slideshow</li>
            <li>All images taken will be fully edited with no watermark so that they can be printed by yourself or shared with friends and family</li>
            <li>USB stick containing all images</li>
        </ul>
        



<p>
We also offer a small single page website developed specifically for your wedding and can include details such as the location of your wedding, the date and any other information you would like guests to know: we can give you a link to share via social media, text or email. This would be an extra add-on of £100 if you wish to have us do this.</p>
        
        
        <div className={styles.priceimg}>
                <Img
                        title="Ember Photography"
                        alt="Picture of Ember Photography work"
                        sizes={data.PriceImage.sizes}
                    />
                
                
            </div>
        
        
        <Link to="/">Go back to the homepage</Link>
    </div>
)


export default PricesPage


export const pageQuery = graphql`
  query PricesImageQuery {
    PriceImage: imageSharp(id: { regex: "/prices/prices.jpg/" }) {
      sizes(maxWidth: 1200, quality:85  ) {
        ...GatsbyImageSharpSizes
      }
    }
  },

`