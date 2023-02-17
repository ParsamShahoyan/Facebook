import {configureStore} from '@reduxjs/toolkit'
import { postsReducer } from './slices/posts/postsSlice'
import { searchReducer } from './slices/search/searchSlice'
const store = configureStore({
    reducer:{
        posts: postsReducer,
        search: searchReducer,
    }
})
export default store