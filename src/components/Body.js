import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from "./Home"
import ContactPage from './ContactPage'
import Projects from './Projects'

const Body = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Home/>
      <Projects/>
      <ContactPage/>

    </div>
  )
}

export default Body