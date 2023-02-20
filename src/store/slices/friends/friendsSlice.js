import { createSlice } from '@reduxjs/toolkit'
import fetchFriends from './friendsApi'

const friendsSlice = createSlice({
    name: 'friends',
    initialState : [],
    reducers: {
        delFriend(state, {payload}) {
         return  state.filter(friend => friend.id !== payload) 
        },
        
    },
    extraReducers: {
        [fetchFriends.fulfilled]:  (state, {payload}) => {
            // console.log(payload)
            return payload
        }
    }
})
 
export const selectFriends = state => state.friends

export const  { delFriend } = friendsSlice.actions

export const friendsReducer = friendsSlice.reducer