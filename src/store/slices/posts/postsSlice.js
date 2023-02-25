import { createSlice } from "@reduxjs/toolkit";
import fetchPosts from "./postsApi";

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addPost (state, {payload}) {
            return [
                payload,
                ...state
            ]
        },
        delPost (state, {payload}) {
            return [
                ...state.filter(post => post.id !== payload)
            ]
        },
        countLike (state, {payload}) {
            const idx = state.findIndex(post => post.id === payload)
            state[idx].likesCount = 1 
        } 
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, {payload}) => {
            return payload
        }
    }
})


export const selectPosts = state => state.posts

export const { delPost, countLike, addPost } = postsSlice.actions

export const postsReducer = postsSlice.reducer