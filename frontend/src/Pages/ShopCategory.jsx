import React, { useContext } from 'react'
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
  return (

    <div className='shop_Cat'>
      <img className='shopCategory-banner' src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
            <span>Showing 1-12 </span>out of 36 Products
        </p>
        <div className='shopCategory-sort'>
            Sort by <img  src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopCategory_product">
        {all_product.map((productCat,i)=>{
           if(props.category===productCat.category){
              return <Item key={i} id={productCat.id} image={productCat.image} name={productCat.name} newPrice={productCat.new_price} oldPrice={productCat.old_price} />
           }
           else{
            return null;
           }
        })}
      </div>
      <div className="loadMore_Product">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
