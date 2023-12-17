import React, { useEffect, useState } from "react";

import { useStateContext } from '../Context/index';
import {
  About,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Admin,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Transfer,
  TimeLine,
  TokenSale
} from '../Components/index';
import ProductTesting from "../Components/ProductTesting";

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
    transferToken,
    buyProduct,
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
      <Admin
        transferNativeToken={transferNativeToken}
        mintToken={mintToken}
      />
      <Contact />
      <Footer />
      <ProductTesting
        buyProduct={buyProduct}
      />
    </div>
  );
};

export default index;
