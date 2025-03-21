// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/header'
import EntryLog from './components/entryLog'
import EntryInput from './components/entryInput'
import EntryReset from './components/entryReset'

function ActorWeb() {

  return (
    <>
      <Header />
      <EntryLog />
      <EntryInput />
      <EntryReset />
    </>
  )
}

export default ActorWeb
