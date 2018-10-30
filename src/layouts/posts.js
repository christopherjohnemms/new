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
                      <div className={styles.divider}></div>
                      <h4 style={{color: 'rgb(165, 164, 164)'}}>
                        <span className={styles.date} style={{fontSize: '1.2em'}}>{post.frontmatter.date}</span>
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