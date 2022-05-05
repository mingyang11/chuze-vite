import { useState } from 'react'
import Layouts from './layout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layouts />
    </div>
  )
}

export default App
