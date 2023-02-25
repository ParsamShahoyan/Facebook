import React, { useRef } from 'react'
import './styleAddpost.scss'
import IMAGES from '../../images/indexIMG'
import { useDispatch } from 'react-redux'
import { addPost } from '../../store/slices/posts/postsSlice'

const Addpost = () => {

  const descRef = useRef()
  const urlRef = useRef()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addPost({
      id: new Date().getTime(),
      name: 'currentUser',
      postText: descRef.current.value,
      likesCount: 0,
      time: Math.round(Math.random() * 8 + 1),
      img:  urlRef.current.value
    }))

  }

  return (
    <div className="post">
        <div className="addpost">
          <form action="" onSubmit={handleSubmit}>
          <div className="top">
              <img className='useradd' src={IMAGES.user} alt="" />
              <input ref={descRef} placeholder='description' type="text" />
            </div>
            <input ref={urlRef} placeholder='https://www.img...' type="text" />
            <input type="submit" style={{display: 'none'}} />
          </form>
            <hr/>
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