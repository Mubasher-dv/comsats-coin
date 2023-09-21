import React, { useState } from "react";
import { BsCurrencyBitcoin, BsArrowRight } from 'react-icons/bs'
import { SiRipple, SiLitecoin } from 'react-icons/si'
import { FaEthereum } from 'react-icons/fa'

const Transfer = ({ transferToken, tokenBalance }) => {
  const [address, setAddress] = useState('');
  const [nToken, setnToken] = useState(1);

  // const percentage = (tokenSale?.tokenSold / tokenSale.tokenSaleBalance) * 100;
  // const showPercentage = percentage.toString();
  return (
    <section
      id="transfer"
      className="section_token token_sale bg_light_dark"
      data-z-index='1'
      data-parallax='scroll'
      data-image-src='assets/images/token_bg.png'
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                Transfer Token
              </h4>
              <p
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content here, content here', making it
                look like readable English
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="pr_box">
              <h6
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                Starting Time:
              </h6>
              <p
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                July 23,2023 (Mon 10:00 AM)
              </p>
            </div>

            <div className="pr_box">
              <h6
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                Ending Time:
              </h6>
              <p
                className="animation"
                data-animation='fadeInUp'
                data-animation-delay='0.2s'
              >
                Dec 23,2023 (Mon 10:00 AM)
              </p>
            </div>

          </div>

          <div className="col-lg-6">
            <div className="token_sale res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30">
              <div
                className="animation tk_countdown text-center token_countdown_bg"
                data-animation='fadeInUp'
                data-animation-delay='0.1s'
              >

                <div className="field_form">
                  <div className="row">
                    <div
                      className="form-group col-md-12 animation"
                      data-animation='fadeInUp'
                      data-animation-delay='1.4s'
                    >
                      <strong>Enter Reciever Address</strong>
                      <input
                        type="text"
                        required
                        placeholder="0x"
                        id="address"
                        min={1}
                        className="form-control"
                        onChange={(e) => setAddress(e.target.value)}
                        name="address"
                      />
                    </div>
                  </div>
                </div>

                <div className="field_form">
                  <div className="row">
                    <div
                      className="form-group col-md-12 animation"
                      data-animation='fadeInUp'
                      data-animation-delay='1.4s'
                    >
                      <strong>Enter Number of tokens</strong>
                      <input
                        type="number"
                        required
                        placeholder="1"
                        id="first-name"
                        min={1}
                        className="form-control"
                        onChange={(e) => setnToken(e.target.value)}
                        name="token"
                      />
                    </div>
                  </div>
                </div>


                <a
                  onClick={() => transferToken(address, nToken)}
                  className="btn btn-default btn-radius animation"
                  data-animation='fadeInUp'
                  data-animation-delay='0.1s'
                >
                  Transfer Token <BsArrowRight />
                </a>

                <div className="pr_box">
                  <h6
                    className="animation"
                    data-animation='fadeInUp'
                    data-animation-delay='0.2s'
                  >
                    Tokens In Your Account:
                  </h6>
                  <p
                    className="animation"
                    data-animation='fadeInUp'
                    data-animation-delay='0.2s'
                  >
                    {tokenBalance}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Transfer;
