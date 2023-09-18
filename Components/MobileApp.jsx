import React from "react";
import { AiFillApple,AiFillAndroid } from 'react-icons/ai'
import { IoLogoAndroid, IoLogoApple } from 'react-icons/io'

const MobileApp = () => {
  return (
    <section
      id="mobileapp"
      className="bg_light_dark"
      data-z-index='1'
      data-parallax='scroll'
      data-image-src='assets/images/app_bg.png'
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="title_default_light title_border text_md_center">
              <h4
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                Download Mobile App
              </h4>
              <p
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like
                readable English
              </p>
              <p
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like
                readable English
              </p>
            </div>

            <div
              className="btn_group text_md_center animation"
              data-animation='fadeInUp'
              data-animation-delay='0.6s'
            >
              <a className="btn btn-default btn-radius">
                <AiFillAndroid className="new_font_size" /> Goole Store
              </a>

              <a className="btn btn-default btn-radius">
                <IoLogoApple className="new_font_size" /> Goole Store
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12">
            <div 
              className="res_md_mt_50 res_sm_mt_30 text-center animation"
              data-animation='fadeInUp'
              data-animation-delay='0.2s'
            >
              <img src="assets/images/mobile_app3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
