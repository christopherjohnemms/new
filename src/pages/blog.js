import React from 'react'
import Link from 'gatsby-link'


const BlogPage = ({data}) => (
    <div>
        <h1>Blog Page</h1>
        <p>Lorem Ipsum</p>
        <Link to="/">Go back to the homepage</Link>


        <div>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id} className="article-box">
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
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}) {
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