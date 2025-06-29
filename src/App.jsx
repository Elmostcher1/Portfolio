import React, { useEffect, useState } from 'react'
import {createBrowserRouter, createHashRouter , RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/About/Skills/Skills'
import Tools from './components/About/Tools/Tools'
import Contact from './components/Contact/Contact'
import Portfolio from './components/portfolio/portfolio'

function App() {


  const router = createHashRouter([
    {
      path : '' , 
      element : <Layout/> , 
      children : [
        { path : '' , element : <Home />  } ,
        { path : '' , element : <About  />  , children : [
          {path : 'about' , element : <Skills />} , 
          {path : 'tools' , element : <Tools />} , 
        ] } ,
        {path : 'contact' , element : <Contact />} , 
        {path : 'pro' , element : <Portfolio />} , 
      ]

    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
