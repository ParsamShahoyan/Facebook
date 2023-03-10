import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'
import Friends from './components/Friends/Friends'
import Watching from './components/Watching/Watching'
import Marketplace from './components/Marketplace/Marketplace'
import Game from './components/Game/Game'
import './App.css'
import Uniq from './components/Uniq/Uniq'
import Main from './components/Main/Main'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} >
        <Route index element={<Home/>} />
        <Route path='friends' element={<Friends/>} />
        <Route path='watch' element={<Watching/>} />
        <Route path='market' element={<Marketplace/>} />
        <Route path='game' element={<Game/>} />
        <Route path='/main' element={<Main />} />
        <Route path='/uniq/:id' element={<Uniq />} />
      </Route>
    </Routes>
  )
}

export default App