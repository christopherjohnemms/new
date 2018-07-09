import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";


import styles from '../../assets/header.module.scss'

const Header = ({ siteTitle, HeaderImage }) => (
    <div className={styles.header_wrap}>
        <div className={styles.header_inner}>
            <div className={styles.logo}>
                <Link to="/">
                    <Img
                        title="Ember Photography"
                        alt="Ember Photography"
                        sizes={HeaderImage.sizes}
                    />
                </Link>
            </div>
            <div className={styles.links}>
                <ul>
                      <li><Link to="/portfolio/">Portfolio</Link></li>
                      <li><Link to="/about/">About</Link></li>
                      <li><Link to="/prices/">Prices</Link></li>
                      <li><Link to="/blog/">Blog</Link></li>
                      <li><Link to="/contact/">Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>
)         


export default Header
