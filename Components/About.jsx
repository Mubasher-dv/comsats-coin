import React from "react";
import {BsArrowRight} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about" className="small_pt">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="text_md_center">
              <img 
                src="assets/images/about_img2.png"
                alt="about image" 
                className="animation" 
                data-animation='zoomIn'
                data-animation-delay='0.2s'
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
            <div className="title_default_light title_border">
              <h4 
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                About the Cryptocash
              </h4>
              <p 
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.4s'
              >
                It is a long established fact that a reader will be distracted by the readable content of a page
                 when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                 distribution of letters, as opposed to using 'Content here, content here', making it look like 
                 readable English.
              </p>
              <p 
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.8s'
              >
                It is a long established fact that a reader will be distracted by the readable content of a page
                 when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                 distribution of letters, as opposed to using 'Content here, content here', making it look like 
                 readable English.
              </p>
            </div>

            <a 
              href="" 
              className="btn btn-default btn-radius video animation"
              data-animation='fadeInUp'
                data-animation-delay='1s'
            >
              Let's Start <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
