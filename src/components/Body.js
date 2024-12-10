import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from "./Home"
import ContactPage from './ContactPage'

const Body = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Home/>
      <ContactPage/>

    </div>
  )
}

export default Body