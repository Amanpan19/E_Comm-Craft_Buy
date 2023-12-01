import React from 'react'
import star from '../Assets/star_icon.png';
import star_dull from '../Assets/star_dull_icon.png';
import './ProductDisplay.css';

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productDisplay'>
        <div className='productDisplay-left'>
            <div className='productDisplay-img'>
                <img className='main_img' src={product.image} alt="main product" />
            </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="ratingStars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star_dull} alt="" />
                <p>({product.rating})</p>
            </div>
            <div className="productPrice">
                <div className='newPrice'>${product.new_price}</div>
                <div className='oldPrice'>${product.old_price}</div>
            </div>
            <div className="description">
              <p>{product.disc}</p>
            </div>
            <button>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductDisplay
