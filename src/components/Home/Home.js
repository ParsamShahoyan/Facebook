import React from 'react'
import Addpost from '../AddPost/Addpost'
import Post from '../Post/Post'
import Story from '../Story/Story'
import './styleHome.scss'

const Home = () => {

  return (
    <>
      <Story/>
      <Addpost/>
      <Post/>
    </>
  )
}

export default Home