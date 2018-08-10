import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'
import Img from "gatsby-image";
import Plyr from 'react-plyr';

 

const ClientVideo = props => (
    <div>
        <link rel="stylesheet" href="https://cdn.plyr.io/3.3.21/plyr.css" />
        <Plyr
          type="youtube" // or "vimeo"
          videoId={props.videoid}
        />
    </div>
)         


export default ClientVideo

