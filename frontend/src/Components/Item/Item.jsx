import React from 'react'
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className='item_price'>
        <div className='new_price'>
          ${props.newPrice}
        </div>
        <div className="old_price">
          ${props.oldPrice}
        </div>
      </div>
    </div>
  )
}

export default Item
