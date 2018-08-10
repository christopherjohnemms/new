import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/index.module.scss'
import PrimaryButton from '../components/buttons/primarybutton'
import SlickSlider from '../components/sliders/slickslider'
import Img from "gatsby-image";

class IndexPage extends React.Component {
  render() {
    return (
      <div>
          <div className={"test"}>
              <div className={"test"}></div>
          </div>
          <SlickSlider
            slideImageOne=      {this.props.data.slideImageOne}
            slideImageTwo=      {this.props.data.slideImageTwo}
            slideImageThree=    {this.props.data.slideImageThree}
            slideImageFour=     {this.props.data.slideImageFour}
            slideImageFive=     {this.props.data.slideImageFive}
          />
          <div className={styles.content}>
              <h1><span className={styles.pink}> Story tellers</span> first.</h1>
              <p>We thrive on capturing those amazing and unique moments that happen when people forget the cameras are there. When you hire a wedding photographer you are inviting someone into one of the most precious chapters of your life and trusting them to tell this part of your story. We stay true to our vision by using a photojournalistic style to document those fleeting moments, providing a true reflection of your wedding day.</p>
          </div>
        
            <div className={styles.us}>
                <Img
                        title="Chris and Sam"
                        alt="Chris and Sam"
                        sizes={this.props.data.UsImage.sizes}
                    />
                
                
            </div>
            
            <div className={styles.content}>
              <h1>We are <span className={styles.pink}> Sam & Chris</span>.</h1>
              <p>We're two ambitious, passionate wedding photographers from Staffordshire looking to capture the unparalelled memories
              your day will bring. We thrive on the wedding atmosphere, bringing with us a focused and professional approach based on our foundations as
              creative people.</p>
                <div className={styles.bookus}>
                    <Link to="/contact/">BOOK US</Link> <span> | </span><Link to="/portfolio/">LEARN MORE</Link>
                </div>
            </div>
      </div>
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
  query SliderImageQuery {
    slideImageOne: imageSharp(id: { regex: "/home/7.jpg/" }) {
      sizes(maxWidth: 2400, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    slideImageTwo: imageSharp(id: { regex: "/home/8.jpg/" }) {
      sizes(maxWidth: 2400, quality:95 ) {
        ...GatsbyImageSharpSizes
      }
    },
    slideImageThree: imageSharp(id: { regex: "/home/3.jpg/" }) {
      sizes(maxWidth: 2400, quality:95 ) {
        ...GatsbyImageSharpSizes
      }
    },
    slideImageFour: imageSharp(id: { regex: "/home/2.jpg/" }) {
      sizes(maxWidth: 240, quality:95 ) {
        ...GatsbyImageSharpSizes
      }
    },
    slideImageFive: imageSharp(id: { regex: "/home/9.jpg/" }) {
      sizes(maxWidth: 2400, quality:95 ) {
        ...GatsbyImageSharpSizes
      }
    },
    UsImage: imageSharp(id: { regex: "/home/us.jpg/" }) {
      sizes(maxWidth: 1200 ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    },
  },

`