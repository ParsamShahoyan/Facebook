import { createSlice } from '@reduxjs/toolkit'
import fetchProducts from './productsApi'

const productsSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {},
    extraReducers: {
        [fetchProducts.fulfilled]: (state, {payload}) => {
            return payload
        },
    }
})

export const selectProduct = state => state.product

export const {  } = productsSlice.actions

export const productReducer = productsSlice.reducer