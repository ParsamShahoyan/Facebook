import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/slices/currentUser/currentUserSlice'
import AddPost from '../AddPost/Addpost'
import './styleMain.scss'

const Main = () => {
    const currentUser = useSelector(selectCurrentUser)
    // console.log(currentUser)
  return (
    <main className='main'>
      <div className="main_top">
        <img src={currentUser[0]?.img} alt="" />
        <h1>{currentUser[0]?.name}</h1>
        <p>Friends: {currentUser.length}</p>
      </div>
      <div className="main_bootom">
      <div className='friends_cont'>
        <div className='fr'>
          <h2>Friends</h2>
          <p>Friends: {currentUser.length}</p>
        </div>
          {
            currentUser.length ? 
            currentUser?.map(user => (
              <div key={user.id}>
                <h5>{user.friend[0].name}</h5>
                <img src={user.friend[0].img} alt="" />
              </div>
            )) : <h3>Please add frends</h3>
          }
        </div>  
        <AddPost/>
      </div>        
    </main>
  )
}

export default Main