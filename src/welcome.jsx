// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import Intro from './intro'
import Rules from './rules'

function Welcome() {

  return (
    <>
      <Header />
      <Intro />
      <Rules />
      <Link to="/actorWeb">Web Actor</Link>
    </>
  )
}

export default Welcome
