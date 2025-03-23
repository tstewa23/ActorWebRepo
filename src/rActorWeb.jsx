import './App.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/header'
import EntryLog from './components/entryLog'
import EntryInput from './components/entryInput'
import EntryReset from './components/entryReset'
import './rActorWeb.css'

function ActorWeb() {

  return (
    <section className='welcome'>
      <Header />
      <EntryLog />
      <EntryInput />
      <EntryReset />
    </section>
  )
}

export default ActorWeb
