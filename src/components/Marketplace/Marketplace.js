import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchProducts from '../../store/slices/products/productsApi'
import { selectProduct } from '../../store/slices/products/productsSlice'
import Product from '../Product/Product'
import Spiner from '../Spiner/Spiner'
import "./styleMarketplace.scss"

const Marketplace = () => {
  
  const products = useSelector(selectProduct)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className='Marketplace'>
        {
          products.length?
          products?.map(product => (
            <Product {...product} key={product.id}/>
          ))
          : <Spiner />
        }
    </div>
  )
}

export default Marketplace