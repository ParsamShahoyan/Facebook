import React from 'react'
import IMAGES from '../../images/indexIMG'
import './styleStory.scss'

const Story = () => {
  return (
    <div className="story">
        <div className="nav_story">
            <div>
              <img src={IMAGES.story} alt="" />
            </div>
            <dir>
              <img src={IMAGES.reels} alt="" />
            </dir>
        </div>
        <hr />
        <div className="slider">
          <img src={IMAGES.user} alt="" />
          <img src={IMAGES.user} alt="" />
          <img src={IMAGES.user} alt="" />
          <img src={IMAGES.user} alt="" />
        </div>
    </div>
  )
}

export default Story