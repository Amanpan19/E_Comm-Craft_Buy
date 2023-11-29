import React from 'react'
import './NewCollection.css';
import new_Collections from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollection = () => {
  return (
    <div className='newCollection'>
      <h1>New Collection</h1>
      <hr />
      <div className="collection">
        {new_Collections.map((item,i)=>{
            return <Item key={i} id={item.id} image={item.image} name={item.name} newPrice={item.new_price} oldPrice={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollection
