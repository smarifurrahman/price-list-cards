import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import PriceList from './components/PriceList/PriceList';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-xl'>Tailwind With React</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App
