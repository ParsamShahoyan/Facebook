import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import IMAGES from "../../../images/indexIMG";

const fetchFriends = createAsyncThunk(
    'friends/fetchFriends',
    async function(){
        const {data : friendsData} = await axios.get('https://jsonplaceholder.typicode.com/users')
        const {data : photoData} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        const data = friendsData.map(friend => ({
            id: friend.id.toString(),
            name: friend.name,
            email: friend.email,
            city: friend.address.city,
            company: friend.company.name,
            friend: false,
            img: photoData.find(photo => photo.id === friend.id).url,
            avatar: IMAGES.user

        }))
        // console.log(data)
        return data
    }
)

export default fetchFriends