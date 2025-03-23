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
