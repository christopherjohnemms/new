import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/portfolio.module.scss'


const PortfolioPage = ({data}) => (
        <div className={styles.pagecontent}>
      <h1 className={styles.title}><span className={styles.pink}>Our</span> portfolio</h1>
        <h3><br />Here are a few of the weddings that we have been so lucky to photograph!</h3>
        <p>We are currently updating our website and migrating these images.. </p>
        <Link to="/">Go back to the homepage</Link>


        <div>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id} className={styles.articlebox}>
                    <Link to={node.fields.slug} style={{textDecoration: 'none', color: 'inherit'}}><h3 className="title">{node.frontmatter.title}</h3></Link>
                </div>
            ))}
        </div>
    </div>
)


export default PortfolioPage

export const  query = graphql`
query PortfolioPageQuery{
  allMarkdownRemark(
  sort: {fields: [frontmatter___date], order: ASC},
  filter: {
      frontmatter: { type: { eq: "Portfolio" } }
    },
  ) {
    totalCount
    edges {
      node {
        fields{
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}
`