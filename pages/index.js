import React from "react";

import { useStateContext } from '../Context/index';
import {
  About,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Transfer,
  TimeLine,
  TokenSale
} from '../Components/index';

const index = () => {
  const {
    TOKEN_ICO,
    transferNativeToken,
    currentHolder,
    tokenSale,
    tokenHolders,
    nativeToken,
    balance,
    tokenBalance,
    address,
    buyToken,
    ConnectWallet,
    setAddress,
    mintToken,
    transferToken
  } = useStateContext();


  return (
    <div className="v_dark">
      <Header
        address={address}
        setAddress={setAddress}
        ConnectWallet={ConnectWallet}
      />
      <Banner
        transferNativeToken={transferNativeToken}
        mintToken={mintToken}
      />
      <Service />
      <About />
      <TokenSale
        buyToken={buyToken}
        tokenSale={tokenSale}
      />
      <Distribution />
      <MobileApp />
      <Transfer 
        transferToken={transferToken} 
        tokenBalance={tokenBalance}
      />      
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
