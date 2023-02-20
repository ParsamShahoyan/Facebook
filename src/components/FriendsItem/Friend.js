import React from 'react'
import { useDispatch } from 'react-redux'
import { addFriends } from '../../store/slices/currentUser/currentUserSlice'
import { delFriend } from '../../store/slices/friends/friendsSlice'
import './styleFriend.scss'

const Friend = ({id, name, email, city, img, company, friend, avatar}) => {

  const dispatch = useDispatch()
  
  const addFriend = () => {
    dispatch(addFriends({id, name, email, city, img, company, friend, avatar}))
    dispatch(delFriend(id))
  }

  const deleteFriend = ()  => {
    dispatch(delFriend(id))
  }
  return (
    <div >
        <div className="friend">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <button onClick={addFriend} >Add to friend</button>
            <button onClick={deleteFriend}>Delete</button>
        </div>
    </div>
  )
}

export default Friend