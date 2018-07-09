import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/index.module.scss'
import PrimaryButton from '../components/buttons/primarybutton'
import SlickSlider from '../components/sliders/slickslider'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
    
        <SlickSlider 
            slideImageOne={this.props.data.slideImageOne} 
            slideImageTwo={this.props.data.slideImageTwo} 
            slideImageThree={this.props.data.slideImageThree} 
            slideImageFour={this.props.data.slideImageFour} 
            slideImageFive={this.props.data.slideImageFive} 
        />

        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>


            <div className={styles.test}>
                <PrimaryButton buttonText="test!!!" />
            </div>


             <Link to="/page-2/">Go to page 2</Link>


        </div>
    );
  }
}


export default IndexPage


export const pageQuery = graphql`
  query SliderImageQuery {
    slideImageOne: imageSharp(id: { regex: "home/7.jpg/" }) {
      sizes(maxWidth: 2400 ) {
        ...GatsbyImageSharpSizes
      }
    },
    slideImageTwo: imageSharp(id: { regex: "/home/8.jpg/" }) {
      sizes(maxWidth: 2400 ) {
        ...GatsbyImageSharpSizes
      }
    },
    slideImageThree: imageSharp(id: { regex: "/home/3.jpg/" }) {
      sizes(maxWidth: 2400 ) {
        ...GatsbyImageSharpSizes
      }
    },
    slideImageFour: imageSharp(id: { regex: "/home/2.jpg/" }) {
      sizes(maxWidth: 2400 ) {
        ...GatsbyImageSharpSizes
      }
    },
    slideImageFive: imageSharp(id: { regex: "home/9.jpg/" }) {
      sizes(maxWidth: 2400 ) {
        ...GatsbyImageSharpSizes
      }
    },


  }
`