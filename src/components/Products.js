import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'
import { useStateValue } from '../stateProvider/StateProvider';

function Products({ image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        image: image
      },
    });
  };

  return (
    <div className="products">
      <img src={image} alt="#" className="products_image" />
      <Link className="products_button" to="/checkout" onClick={addToBasket}>
        <button id="products_button" >Add Item</button>
      </Link>
    </div>
  )
}

export default Products
