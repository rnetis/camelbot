import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk';

function App() {
  const [count, setCount] = useState(0)

  const counter = (cn: number) => {
    WebApp.CloudStorage.setItem("counter", (cn + 1).toString())
    return cn + 1
  }

  WebApp.CloudStorage.getItem("counter", (error, result) => {
    console.log(result)
    setCount(parseInt(result?.toString() || '0'))
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{count}</h1>
      <div className="card">
        <button className="btn-class-name" onClick={() => setCount((cn) => counter(cn))}>
          <span className="back"></span>
          <span className="front"></span>
        </button>
      </div>
      <div>
        <button onClick={() => WebApp.showAlert(`Hello, World Current Count is ${count}`)}>
          Show Counter
        </button>
      </div>
    </>
  )
}

export default App
