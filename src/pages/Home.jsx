import React from 'react'
import Hero from '../components/Hero.jsx'
import Biography from '../components/Biography.jsx'
import Departments from '../components/Departments.jsx'
import MessageForm from '../components/MessageForm.jsx'

const Home = () => {
  return (
    <>
    <Hero title={"Welcome to R-care Medical Institute | Your trusted Healthcare provider"} imageUrl={"/hero.png"}/>
    <Biography imageUrl={"/about.png"}/>
    <Departments/>
    <MessageForm/>
    </>
  )
}

export default Home