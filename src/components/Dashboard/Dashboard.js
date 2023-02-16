import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

const Dashboard = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default Dashboard