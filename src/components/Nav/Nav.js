import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import IMAGES from '../../images/indexIMG'
import './styleNav.scss'
import { useDispatch } from 'react-redux'
import { addText, selectSearch } from '../../store/slices/search/searchSlice'

const Nav = () => {

  const dispatch = useDispatch()
  const inputRef = useRef(null)
  
  const handleSearch = () => {
    dispatch(addText(inputRef.current.value))
  }

  return (
    <nav>
        <div className="left">
            <Link to='/'>{<img className='logo' src={IMAGES.logo} alt="" />}</Link>
            <input ref={inputRef} onChange={handleSearch} className='search' type="text" />
        </div>
        <div className="between">
            <NavLink to='/' activeclassname={'active'}>{<img src={IMAGES.home}/>}</NavLink>
            <NavLink to='friends' activeclassname={'active'}>{<img src={IMAGES.friends}/>}</NavLink>
            <NavLink to='watch' activeclassname={'active'}>{<img src={IMAGES.video}/>}</NavLink>
            <NavLink to='market' activeclassname={'active'}>{<img src={IMAGES.marketplace}/>}</NavLink>
            <NavLink to='game' activeclassname={'active'}>{<img src={IMAGES.joystick}/>}</NavLink>
        </div>
        <div className="rigth">
            <Link>{<img src={IMAGES.menu}/>}</Link>
            <Link>{<img src={IMAGES.massenger}/>}</Link>
            <Link>{<img src={IMAGES.push}/>}</Link>
            <Link to='main'>{<img src={IMAGES.user}/>}</Link>
        </div>
    </nav>
  )
}

export default Nav