import React from 'react'
import Nav from './common/Nav/Nav'
import { Outlet } from 'react-router-dom'
import ButtonTop from './components/ButtonTop'

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <ButtonTop />
    </>
  )
}

export default Layout
