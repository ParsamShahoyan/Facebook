import React from 'react'
import './styleNews.scss'
import IMAGES from '../../images/indexIMG'
import { useNavigate } from 'react-router-dom'

const News = ({id, img, likesCount, time, name, postText}) => {
  const navigate = useNavigate()
  const handleclick = () => {
    navigate("uniq/" + id)
  }
  return (
    <div className='news'>
        <div onClick={handleclick} className="name_post">
          <img style={{width: '50px', borderRadius: '50%'}} src={img} alt="" />
          <h2>{name}<span>{time} min</span></h2>
        </div>
        <p>{postText}</p>
        <img src={img} alt="" />
        <img className='like' src={IMAGES.like} alt="" />
        <span>{likesCount}</span>
    </div>
  )
}

export default News