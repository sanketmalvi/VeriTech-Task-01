import { useState } from 'react'
import TeamMembers from './components/TeamMembers'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TeamMembers />
    </>
  )
}

export default App
