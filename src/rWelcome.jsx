import './App.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/header'
import Intro from './components/intro'
import Rules from './components/rules'
import './rWelcome.css'

function Welcome() {

  return (
    <section className='welcome'>
      <Header />
      <Intro />
      <Rules />
      <Link to="/actorWeb">Start</Link>
    </section>
  )
}

export default Welcome
