import { createSlice } from "@reduxjs/toolkit";
import IMAGES from "../../../images/indexIMG";
import { v4 } from 'uuid'

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: [],
    reducers: {
        addFriends(state, {payload}) { 
                // console.log(payload)
                return [
                    ...state,
                    {   
                        id: payload.id,
                        name: ' currentUser',
                        img: IMAGES.user,
                        friend: [
                            {
                                id: payload.id,
                                name : payload.name,
                                img: payload.img,
                            },
                        ]
                    }
                ]

        },
    }
})

export const selectCurrentUser = state => state.currentUser

export const { addFriends } = currentUserSlice.actions

export const currentUserReducer = currentUserSlice.reducer