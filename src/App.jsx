import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  )
}

export default App
