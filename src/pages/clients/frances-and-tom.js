import React from 'react'
import Link from 'gatsby-link'
import styles from '../../assets/clients.module.scss'
import Img from "gatsby-image";
import Helmet from 'react-helmet'
import ClientVideo from '../../components/video/clientvideo'

const ClientPage = ({data}) => (
    <div>
     <Helmet
      title={'Frances and Tom | Ember Photography'}
      meta={[
        { name: 'description', content: 'Two passionate wedding photographers in Staffordshire UK, specialising in unique creative wedding photojournalism and documentary wedding photography.' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className={styles.pagecontent}>
      <h1 className={styles.title}>Frances <span className={styles.pink}>&amp;</span> Tom</h1>
        <h3 className={styles.title}>23rd June 2018</h3>
        <div className={styles.slideshow}>
            <ClientVideo videoid="QUr294L8npQ"/>
        </div>
        
            
        
        <Link to="/">Go back to the homepage</Link>
    </div>
    
    </div>
    
)


export default ClientPage
