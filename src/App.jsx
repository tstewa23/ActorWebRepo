// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Welcome from './welcome'
import ActorWeb from './actorWeb'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/actorWeb" element={<ActorWeb />} />
      </Routes>
    </Router>
  )
}

export default App
