import React, { useEffect } from 'react'
import IMAGES from '../../images/indexIMG'
import { useDispatch, useSelector } from 'react-redux'
import { selectFriends } from '../../store/slices/friends/friendsSlice'
import fetchFriends from '../../store/slices/friends/friendsApi'
import Friend from '../FriendsItem/Friend'
import { v4 } from 'uuid'
import Spiner from '../Spiner/Spiner'
import '../FriendsItem/styleFriend.scss'

const Tester = () => {
  const friends = useSelector(selectFriends)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFriends())
  }, [])
  return (
    <div className='friend_contain'>
      <h1 className='reguest'>You may know them</h1>
      {
        friends.length ?
        friends.map( fr => <Friend {...fr} key={v4()}/>)
        : <Spiner/>
      }
    </div>
  )
}

export default Tester