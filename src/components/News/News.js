import React from 'react'
import './styleNews.scss'
import IMAGES from '../../images/indexIMG'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { countLike, delPost } from '../../store/slices/posts/postsSlice'

const News = ({id, img, likesCount, time, name, postText}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleclick = () => {
    navigate("uniq/" + id)
  }

  const handleDelet =() => {
    dispatch(delPost(id))
  }

  const handleLike = () => {
    dispatch(countLike(id))
    // console.log(id)
  }

  return (
    <div className='news'>
        <div onClick={handleclick} className="name_post">
          <img style={{width: '50px', borderRadius: '50%'}} src={img} alt="" />
          <h2>{name}<span>{time} min</span></h2>
        </div>
        <button onClick={handleDelet}>X</button>
        <p>{postText}</p>
        <img src={img} alt="" />
        <img onClick={handleLike} className='like' src={IMAGES.like} alt="" />
        <span>{likesCount}</span> 
    </div>
  )
}

export default News