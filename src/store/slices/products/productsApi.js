import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const fetchProducts = createAsyncThunk(
    'products/fetchProduct',
    async function() {
        const {data: prodData} = await axios.get('https://fakestoreapi.com/products')
        const data = prodData.map(product => ({
            id: product.id,
            image: product.image,
            price: product.price,
            category: product.category,
            title: product.title
        }))
        // console.log(data)
        return data
    }
)

export default fetchProducts