import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/about.module.scss'
import Img from "gatsby-image";


const AboutPage = ({data}) => (
    <div className={styles.pagecontent}>
      <h1 className={styles.title}><span className={styles.pink}>Who</span> are we?</h1>
        <h3><br />Professional, fun and passionate wedding photographers</h3>
        <p>Our journey into wedding photography together started so unexpectedly that it pretty much changed everything about our lives together. Although we both dreamed of leading creative lives it seemed we were destined for other career paths: a primary school teacher and a front end web developer. We had our lives all planned out and thought we knew exactly where we were going until one special day.</p>
        
        <p>  Our beautiful cousin Emma had asked us to bring our camera gear to her wedding to take some photographs throughout the day on a bit more of a personal level amongst friends and family. The day went by so quickly and soon it was time for the first dance. As soon as it was announced we quickly set up the camera and waited to capture what we thought would be the last special moments of the day - but they kept coming and coming long after. We could not put our cameras down, especially when the photographer left shortly after the first dance where all these moments were being missed. We worked as a team with the limited equipment we had at the time and had the best night of our lives. At the time photography was our creative outlet, both of us thriving off different aspects - Chris' being the technical and Sam's the creative. It wasn't until that night that we came together and discovered our biggest, most insatiable passion. Working together doing something we love, for someone we love, opened up a whole new world to us. </p>
        <div className={styles.aboutimg}>
                <Img
                        title="Ember Photography"
                        alt="Picture of Ember Photography work"
                        sizes={data.AboutImage.sizes}
                    />
                
                
            </div>
        
        
        <Link to="/">Go back to the homepage</Link>
    </div>
)


export default AboutPage

export const pageQuery = graphql`
  query AboutImageQuery {
    AboutImage: imageSharp(id: { regex: "/about/about.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    }
  },

`