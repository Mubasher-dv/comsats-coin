import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

const ProductTesting = ({buyProduct }) => {

    return(
        <div>
            <button onClick={() => buyProduct(5)}>Buy</button>
        </div>
    )
}

export default ProductTesting
