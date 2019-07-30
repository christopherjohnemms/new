import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/portfolio.module.scss'
import Img from "gatsby-image";
import AboutPage from "./about";


const PortfolioPage = ({data}) => (
    <div>
        <div className={styles.pagecontent}>
            <h1 className={styles.title}><span className={styles.pink}>Our</span> portfolio</h1>
            <h3><br />Here are a few of the weddings that we have been so lucky to photograph!</h3>
            {/*<p>We are currently updating our website and migrating these images.. </p>*/}
            <center>
            <Link to="/">Go back to the homepage</Link>
            </center>

            {/*<div className={styles.hidden}>*/}
            {/*    {data.allMarkdownRemark.edges.map(({node}) => (*/}
            {/*        <div key={node.id} className={styles.articlebox}>*/}
            {/*            <Link to={node.fields.slug} style={{textDecoration: 'none', color: 'inherit'}}><h3 className="title">{node.frontmatter.title}</h3></Link>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}


        </div>

        <div className={styles.grid}>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.TestImage1.sizes}
                />
            </div>
            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.TestImage2.sizes}
                />
            </div>
            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.TestImage3.sizes}
                />
            </div>
            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.TestImage4.sizes}
                />
            </div>
            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.TestImage5.sizes}
                />
            </div>


            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image1.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image2.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image3.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image4.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image5.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image6.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image7.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image8.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image9.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image10.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image11.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image12.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image13.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image14.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image15.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image16.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image17.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image18.sizes}
                />
            </div>

            <div className={styles.item}>
                <Img
                    title="Ember Photography"
                    alt="Picture of Ember Photography work"
                    sizes={data.Image19.sizes}
                />
            </div>



        </div>
    </div>


)


export default PortfolioPage

export const pageQuery = graphql`
  query GridImageQuery {
    AboutImage: imageSharp(id: { regex: "/home/4.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    TestImage1: imageSharp(id: { regex: "/home/1.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    TestImage2: imageSharp(id: { regex: "/home/2.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    TestImage3: imageSharp(id: { regex: "/home/3.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    TestImage4: imageSharp(id: { regex: "/portfolio/20.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    TestImage5: imageSharp(id: { regex: "/home/6.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
     Image1: imageSharp(id: { regex: "/portfolio/1.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image2: imageSharp(id: { regex: "/portfolio/2.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image3: imageSharp(id: { regex: "/portfolio/3.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image4: imageSharp(id: { regex: "/portfolio/4.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image5: imageSharp(id: { regex: "/portfolio/5.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image6: imageSharp(id: { regex: "/portfolio/6.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image7: imageSharp(id: { regex: "/portfolio/7.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image8: imageSharp(id: { regex: "/portfolio/8.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image9: imageSharp(id: { regex: "/portfolio/9.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image10: imageSharp(id: { regex: "/portfolio/10.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image11: imageSharp(id: { regex: "/portfolio/11.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image12: imageSharp(id: { regex: "/portfolio/12.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image13: imageSharp(id: { regex: "/portfolio/13.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image14: imageSharp(id: { regex: "/portfolio/14.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image15: imageSharp(id: { regex: "/portfolio/15.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image16: imageSharp(id: { regex: "/portfolio/16.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image17: imageSharp(id: { regex: "/portfolio/17.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image18: imageSharp(id: { regex: "/portfolio/18.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    },
    Image19: imageSharp(id: { regex: "/portfolio/19.jpg/" }) {
      sizes(maxWidth: 1200, quality:95  ) {
        ...GatsbyImageSharpSizes
      }
    }
    
  },

`


