import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const fetchFriends = createAsyncThunk(
    'friends/fetchFriends',
    async function(){
        const {data : {data: newData}} = await axios.get('https://reqres.in/api/users?page=2')
        const data =  newData.map(friend => ({
            id: friend.id.toString(),
            name:[friend.first_name, " ", friend.last_name],
            email: friend.email,
            friend: false,
            img: friend.avatar,
        }))
        return data
    }
)

export default fetchFriends