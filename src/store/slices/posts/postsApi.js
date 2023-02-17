import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function () {
        const {data : dataPosts} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const {data : dataPhoto} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
        const data = dataPosts.map( post => ({
            id: post.id.toString(),
            name: post.title.slice(0, post.title.indexOf(' ')),
            postText: post.body.slice(post.title.indexOf(' ') + 1),
            likesCount: Math.round(Math.random() * 120 + 200),
            time: Math.round(Math.random() * 8 + 1),
            img: dataPhoto.filter(photo => photo.id === post.id)
                        .map(photo => photo.url)
        }))
        // console.log(data)
       return data
    }
)

export default fetchPosts