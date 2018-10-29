import React from "react";
import styles from '../assets/blogposts.module.scss'


export default ({ data }) => {
    const post = data.markdownRemark;
    const posttype = post.frontmatter.type;
    console.log(posttype);
    if(posttype === "Blog"){
      return (
              <div className={styles.pagecontent}>
                  <div className={styles.blogpost}>
                      <h1>{post.frontmatter.title}</h1>
                      <h4 style={{color: 'rgb(165, 164, 164)'}}>{post.frontmatter.author} 
                        <span style={{fontSize: '0.8em'}}> -{post.frontmatter.date}</span>
                      </h4>
                      <div dangerouslySetInnerHTML = {{ __html: post.html }} />
                  </div>
              </div>
          );
    }else{
      return (
        <div className={styles.pagecontent}>
            <div className={styles.blogpost}>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML = {{ __html: post.html }} />
            </div>
        </div>
    );
    }
    
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
        type
      }
    }
  }
`;