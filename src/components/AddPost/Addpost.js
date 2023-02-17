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
              <img className='live' src={IMAGES.live} alt="" /><p>Прямой эфир</p>
              <img className='live' src={IMAGES.image} alt="" /><p>Фото/видео</p>
              <img className='live' src={IMAGES.smail} alt="" /><p>Чувствуй/действия</p>
            </div>
        </div>
      </div>
  )
}

export default Addpost