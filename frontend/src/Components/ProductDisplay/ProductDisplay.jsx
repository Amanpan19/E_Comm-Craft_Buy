import React from 'react'
import star from '../Assets/star_icon.png';
import star_dull from '../Assets/star_dull_icon.png';

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
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay
