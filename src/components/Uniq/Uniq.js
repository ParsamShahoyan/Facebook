import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/slices/posts/postsSlice'
import { useNavigate, useParams } from 'react-router-dom'
import './styleUniq.scss'

const Uniq = () => {
    const posts = useSelector(selectPosts)
    const [post, setPost] = useState()
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        setPost(posts.find(post => post.id === id))
    }, [])
  return (
    <div className='uniq'>
        <div>
          <img style={{width: '50px', borderRadius: '50%'}} src={post?.img} alt="" />
          <h1>{post?.name}</h1>
        </div>
        <img src={post?.img} alt="" />
        <p>{post?.postText}{post?.postText}{post?.postText}</p>
        <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Uniq