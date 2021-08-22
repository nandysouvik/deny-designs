import React from 'react';
import { useStateValue } from '../stateProvider/StateProvider';
import "./CheckoutProduct.css"

function CheckoutProduct() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkoutProduct">
      {basket.map((item) => {
        return (
          <div className="checkoutProduct_details">
            <img className="products_image" src={item.image} alt="#" />
            <button className="btn">BUY NOW</button>
          </div>

        )
      })}

    </div>
  )
}

export default CheckoutProduct
