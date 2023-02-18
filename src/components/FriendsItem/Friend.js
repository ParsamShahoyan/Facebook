import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFriends, selectCurrentUser } from '../../store/currentUser/currentUserSlice'
import { delFriend } from '../../store/slices/friends/friendsSlice'
import './styleFriend.scss'

const Friend = ({id, name, email, city, img, company}) => {

  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  console.log(currentUser)
  
  const addFriend = () => {
    dispatch(addFriends({id, name, email, city, img, company}))
  }

  const deleteFriend = ()  => {
    dispatch(delFriend(id))
  }
  return (
    <div >
        <div className="friend">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <button onClick={addFriend}  onClickCapture={deleteFriend}>Сonfirm</button>
            <button onClick={deleteFriend}>Delete</button>
        </div>
    </div>
  )
}

export default Friend