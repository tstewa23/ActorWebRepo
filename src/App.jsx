// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Actor Web</h1>
      <h3>Connect <em>Actor 1</em> to <em>Actor 2</em> using other actors that share movies or tv shows</h3>
      <p>ex: Steve Carrel to Emily Blunt  Steve Carrel and John Krisinski are in The Office together John
        Krisinski and Emily Blunt are in A Quite Place together</p>
      <h2>Rules</h2>
      <ul>
        <li>You have to use the cast lists on google</li>
        <li>Even if you know someone is in a movie, they have to be on the google list to count</li>
        <li>You can't google anyone execpt for the last link of the chain</li>
        <li>You can't peak and see what the person you are going to pick is in</li>
        <li>ex: You google Steve Carrel and see he is in The Office. You can see the list including Rain Wilson and John
          Krisinski but you can't click on their of them to check what they are in</li>
        <li>You can't google the final person to see what they are in</li>
        <li>You can have repeats but you have to connect back to them</li>
      </ul>
    </>
  )
}

export default App
