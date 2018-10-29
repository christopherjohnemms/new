import React from 'react'
import Link from 'gatsby-link'
import styles from '../assets/blogposts.module.scss'


const BlogPage = ({data}) => (
    <div className={styles.pagecontent}>
        <h1>Blog Page</h1>
        <p>Currently migrating blog posts from the old site</p>
        <Link to="/">Go back to the homepage</Link>


        <div className={styles.hidden}>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id} className={styles.articlebox}>
                    <Link to={node.fields.slug} style={{textDecoration: 'none', color: 'inherit'}}><h3 className="title">{node.frontmatter.title}</h3></Link>
                    <p className="author">{node.frontmatter.author}</p>
                    <p className="date">{node.frontmatter.date}</p>
                    <p className="excerpt">{node.excerpt}</p>
                </div>
            ))}
        </div>
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