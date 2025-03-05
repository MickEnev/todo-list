import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
        <img src="https://i.etsystatic.com/38048886/r/il/757c74/4615360150/il_fullxfull.4615360150_eqfq.jpg" alt="Pokemon" className="bg-image"/>
        <Dashboard/>
      </main>
    </div>
  )
}

export default App
