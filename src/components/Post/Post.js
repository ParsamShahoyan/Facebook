import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchPosts from '../../store/slices/posts/postsApi'
import {selectPosts} from '../../store/slices/posts/postsSlice'
import News from '../News/News'
import './stylePost.scss'

const Post = () => {
    const posts = useSelector(selectPosts)
    const dispatch = useDispatch()
  
    useEffect(() =>{
        if(!posts.length){
        dispatch(fetchPosts())
    }
    }, [])
  return (
    <div >
        {posts.map(post => <News {...post} key={post.id}/>)}
    </div>
  )
}

export default Post