import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        addText(state, {payload}) {
            // console.log(payload)
            return payload
        },
        resetSearch(state, {payload}) {
            return ''
        }
    }
})

export const selectSearch = state => state.search

export const { addText, resetSearch } = searchSlice.actions

export const searchReducer = searchSlice.reducer