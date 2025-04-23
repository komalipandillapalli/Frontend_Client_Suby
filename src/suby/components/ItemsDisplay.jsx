import React, { useState } from 'react'
import { itemData } from '../../data'

const ItemsDisplay = () => {
    const [itemDisplay, setItemDisplay] =useState(itemData);
    
  return (
    <div className='itemSection'>
        {itemDisplay.map(item=>{
            return(
                <div className="gallery" key={item.item_image}>
                    <img src={item.item_image} alt={item.item_image} className='item' />
                </div>
            )
        })}
    </div>
  )
}

export default ItemsDisplay