import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src="/studiohealthaz/logo.svg" className="logo react" alt="React logo" />
      <h1>Studio Health AZ</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>WIP</p>
    </div>
  )
}

export default App
