import {configureStore} from '@reduxjs/toolkit'
import { currentUserReducer } from './slices/currentUser/currentUserSlice'
import { friendsReducer } from './slices/friends/friendsSlice'
import { postsReducer } from './slices/posts/postsSlice'
import { productReducer } from './slices/products/productsSlice'
import { searchReducer } from './slices/search/searchSlice'
const store = configureStore({
    reducer:{
        posts: postsReducer,
        search: searchReducer,
        friends: friendsReducer,
        currentUser: currentUserReducer,
        product: productReducer,
    }
})
export default store