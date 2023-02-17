import { createSlice } from "@reduxjs/toolkit";
import fetchPosts from "./postsApi";

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {},
    extraReducers: {
        [fetchPosts.fulfilled]: (state, {payload}) => {
            return payload
        }
    }
})


export const selectPosts = state => state.posts

export const {} = postsSlice.actions

export const postsReducer = postsSlice.reducer