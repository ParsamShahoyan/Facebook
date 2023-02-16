import React from 'react'
import './styleAddpost.scss'
import IMAGES from '../../images/indexIMG'

const Addpost = () => {
  return (
    <div className="post">
        <div className="addpost">
            <div className="top">
              <img className='useradd' src={IMAGES.user} alt="" />
              <input type="text" />
            </div>
            <hr />
            <div className="bottom">
              <p><img className='live' src={IMAGES.live} alt="" />Прямой эфир</p>
              <p><img className='live' src={IMAGES.image} alt="" />Фото/видео</p>
              <p><img className='live' src={IMAGES.smail} alt="" />Чувствуй/действия</p>
            </div>
        </div>
      </div>
  )
}

export default Addpost