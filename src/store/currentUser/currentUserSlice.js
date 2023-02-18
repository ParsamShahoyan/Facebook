import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: 
        [{
            name: 'user',
            friend: []
        }],
    reducers: {
        addFriends(state, {payload}) {
            return [
                ...state,
                ...state.friend.push(payload)
            ]         
        },
    }
})

export const selectCurrentUser = state => state.currentUser

export const { addFriends } = currentUserSlice.actions

export const currentUserReducer = currentUserSlice.reducer