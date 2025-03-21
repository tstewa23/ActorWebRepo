// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './rWelcome'
import ActorWeb from './rActorWeb'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/actorWeb" element={<ActorWeb />} />
    </Routes>
  )
}

export default App
