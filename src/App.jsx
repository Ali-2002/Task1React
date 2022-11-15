import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserCv from './components/UserCv'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <UserCv/>
    </div>
  )
}

export default App
