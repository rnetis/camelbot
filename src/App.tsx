import { useState } from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk';

function App() {
  const [count, setCount] = useState(0)

  const counter = (cn: number) => {
    if(cn === 0){
      WebApp.CloudStorage.getItem("counter", (error, result) => {
        console.log(error, result)
        setCount(parseInt(result?.toString() || '0'))
      })
    } else 
    WebApp.CloudStorage.setItem("counter", (count + 1).toString())
    return count + 1
  }

  return (
    <>
      <div>
        <h3>Camel Token</h3>
      </div>
      <h1>{count}</h1>
      <div className="card">
        <button className="btn-class-name" onClick={() => setCount((cn) => counter(cn))}>
          <span className="back"></span>
          <span className="front"></span>
        </button>
      </div>
      <div>
        <button onClick={() => WebApp.showAlert(`Current Count is ${count}`)}>
          Show Counter
        </button>
      </div>
    </>
  )
}

export default App
