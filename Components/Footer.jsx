import React from "react";

const Footer = () => {
  const footerList = [
    'CryptoCash', 'How its work', 'work', 'Token', 'FAQ', 'Contact'
  ]
  return (
    <footer>
      <div
        className="top_footer bg_light_dark"
        data-z-index='1'
        data-parallax='scroll'
        data-image-src='assets/images/footer_bg.png'
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div
                className="footer_logo mb-3 animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                <a href="#home_section" className="page-scroll">
                  <img src="assets/images/footer_logo.png" alt="" />
                </a>
              </div>

              <div className="footer_desc">
                <p className="animation" data-animation='fadeInUp' data-animation-delay='0.4s'>
                  asconso lachdlshcodsh saihchodsh
                  hsohfh oashhosj
                  a hosih fosaihhoaido aoiso hvoaho hdhoahoh aoh a asohh saohdha oshh aoh aoh aoh aa so asihhd
                  ahodh oahoa hohaod hoahdha ah odhoah ao ao aohaosh
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 red_md_mt_30 res_sm_mt_20">
              <h4 data-animation='fadeInUp' data-animation-delay='0.2s'
                className="footer_title border_title animation"
              >
                Quick Links
              </h4>

              <ul className="footer_links">
                {
                  footerList.map((list, i) => (
                    <li className="animation" data-animation='fadeInUp' data-animation-delay={`0.${i + 2}s`}>
                      <a href="#">{list}</a>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="col-lg-5 col-md-6 red_md_mt_30 res_sm_mt_20">
              <div className="newsletter_form">
                <h4 className="footer_title border_title animation">
                  NewsLetter
                </h4>
                <p className="animation" data-animation='fadeInUp' data-animation-delay='0.4s'>
                  a hosih fosaihhoaido aoiso hvoaho hdhoahoh aoh a asohh saohdha oshh aoh aoh aoh aa so asihhd
                  ahodh oahoa hohaod hoahdha ah odhoah ao ao aohaosh
                </p>

                <form 
                  action="#" 
                  data-animation='fadeInUp'
                  data-animation-delay='0.4s'
                  className="subscribe_form animation">
                    <input 
                      type="text" 
                      required 
                      placeholder="Enter Email Address" 
                      className="input-rounded" 
                    />

                    <button 
                      type="submit" 
                      title="subscribe"
                      className="btn-info"
                      name="submit"
                      value='submit'
                    >
                      Subscribe
                    </button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="copyright">
                CopyRight &copy; 2023 All Right Reserved by @ComsatsCoin
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list_none footer_menu">
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
