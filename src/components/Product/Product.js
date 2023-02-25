import React from 'react'

const Product = ({category, id, image, price, title}) => {
  return (
    <div className='product'>
        <img src={image} alt="" />
        <p>{price} դր․</p>
        <p>{category}</p>
        <p>{title}</p>
    </div>
  )
}

export default Product