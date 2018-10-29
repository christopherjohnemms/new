import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'
import Img from "gatsby-image";
 
var settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
        autoplay:true,
        arrows:false,
    fade: true,
  cssEase: 'linear',
    autoplaySpeed: 2500
    };

const SlickSlider = props => (
    <div>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        
        <Slider {...settings}>
            <div>
                <div style={{  width:"100%" , height:"100vh", overflow:"hidden", position:"relative" }}>
                    <Img
                        title="Image 1"
                        alt="Wedding"
                        sizes={props.slideImageOne.sizes}
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%"
                          }}
                    />
                </div>
            </div>
            <div>
                <div style={{  width:"100%" , height:"100vh", overflow:"hidden", position:"relative" }}>
                    <Img
                      title="Image 2"
                      alt="Wedding"
                      sizes={props.slideImageTwo.sizes}
                         style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%"
                          }}
                    />
                </div>
            </div>
            <div>
                <div style={{  width:"100%" , height:"100vh", overflow:"hidden", position:"relative" }}>
                    <Img
                      title="Image 3"
                      alt="Wedding"
                      sizes={props.slideImageThree.sizes}
                         style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%"
                          }}
                    />
                </div>
            </div>
            <div>
                <div style={{  width:"100%" , height:"100vh", overflow:"hidden", position:"relative" }}>
                    <Img
                      title="Image 4"
                      alt="Wedding"
                      sizes={props.slideImageFour.sizes}
                         style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%"
                          }}
                    />
                </div>
            </div>
            <div>
                <div style={{  width:"100%" , height:"100vh", overflow:"hidden", position:"relative" }}>
                    <Img
                      title="Image 5"
                      alt="Wedding"
                      sizes={props.slideImageFive.sizes}
                         style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%"
                          }}
                    />
                </div>
            </div>
            <div>
                <div style={{  width:"100%" , height:"100vh", overflow:"hidden", position:"relative" }}>
                    <Img
                      title="Image 6"
                      alt="Wedding"
                      sizes={props.slideImageSix.sizes}
                         style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%"
                          }}
                    />
                </div>
            </div>
          </Slider>
    </div>
)         


export default SlickSlider

