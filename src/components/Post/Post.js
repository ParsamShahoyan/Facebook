import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchPosts from '../../store/slices/posts/postsApi'
import {selectPosts} from '../../store/slices/posts/postsSlice'
import News from '../News/News'
import './stylePost.scss'
import { v4 } from 'uuid'
import { resetSearch, selectSearch } from '../../store/slices/search/searchSlice'

 
const Post = () => {

    const posts = useSelector(selectPosts)
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()
  
    useEffect(() =>{
        if(!posts.length){
        dispatch(fetchPosts())
    }
    }, [])
    
    useEffect(() =>{
      return () => {
        dispatch(resetSearch())
      }
  }, [])
  const filteredPosts = useMemo(() => {
    let initialPosts = [...posts.filter(post => post.name.includes(search.toLowerCase()))]
     return [
        ...initialPosts.filter(post => post.name.startsWith(search)),
        ...initialPosts.filter(post => !post.name.startsWith(search))
     ]
   }, [posts, search])
  return (
    <>
        {filteredPosts.map(post => <News {...post} key={v4()}/>)}
    </>
  )
}

export default Post