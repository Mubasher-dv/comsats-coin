import React from "react";
import { BsArrowRight } from 'react-icons/bs'

const Admin = ({ mintToken, transferNativeToken }) => {
  return (
    <section id="admin" className="small_pt">
      <div className="container">
        <h2 className="text-white text-center mb-5">Admin Panel</h2>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
            <div className="title_default_light title_border">
              <h4
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                Transfer Token To Contract To Buy
              </h4>
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

            {/* <a
              href=""
              className="btn btn-default btn-radius video animation"
              data-animation='fadeInUp'
              data-animation-delay='1s'
            >
              Let's Start <BsArrowRight />
            </a> */}

            <a onClick={() => transferNativeToken()} className="btn btn-border btn-radius">
              Transfer Token Now! <BsArrowRight />
            </a>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
            <div className="title_default_light title_border">
              <h4
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                Mint New Token
              </h4>
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

            {/* <a
              href=""
              className="btn btn-default btn-radius video animation"
              data-animation='fadeInUp'
              data-animation-delay='1s'
            >
              Let's Start <BsArrowRight />
            </a> */}

            <a onClick={() => mintToken()} className="btn btn-border btn-radius">
              Mint New Token Now! <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
