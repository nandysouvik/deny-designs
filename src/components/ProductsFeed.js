import React from 'react';
import Products from './Products';
import './ProductsFeed.css'

function ProductsFeed({ products }) {

  return (
    <div className="productsFeed">
      {products.map((product) => {
        return (
          <Products key={product.id} image={product.image} />
        )
      })}
    </div>
  )
}

export default ProductsFeed
