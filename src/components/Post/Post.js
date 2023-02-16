import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchPosts from '../../store/slices/posts/postsApi'
import {selectPosts} from '../../store/slices/posts/postsSlice'
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
    <div className='news'>
        <h1>post</h1>
        <h1>post</h1>
        <h1>post</h1>
        <h1>post</h1>
        <h1>post</h1>
        <h1>post</h1>
        <h1>post</h1>
        <h1>post</h1>
        <h1>post</h1>
        <h1>post</h1>
    </div>
  )
}

export default Post