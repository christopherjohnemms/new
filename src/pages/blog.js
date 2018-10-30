import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/blogposts.module.scss'


const BlogPage = ({data}) => (
    <div className={styles.pagecontent}>
        <h1>Our Blog</h1>
  
        <div className={styles.blogposts}>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id} className={styles.articlebox}>
                    <Link to={node.fields.slug} style={{textDecoration: 'none', textAlign:'center'}}><h2 className="title">{node.frontmatter.title}</h2></Link>
  <div className={styles.divider}></div>
                    <p style={{textDecoration: 'none', textAlign:'center'}} className="excerpt">{node.excerpt}</p>
                </div>
            ))}
        </div>

        <Link to="/">Go back to the homepage</Link>
        
    </div>
)

export default BlogPage

export const  query = graphql`
query BlogPageQuery{
  allMarkdownRemark(
  sort: {fields: [frontmatter___date], order: ASC},
  filter: {
      frontmatter: { type: { eq: "Blog" } }
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
          date
          author
        }
        excerpt
      }
    }
  }
}
`