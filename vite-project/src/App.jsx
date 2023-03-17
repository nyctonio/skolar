import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// react component based 
// you can consider these functions as components


const Counter = ()=>{
  const [count, setCount] = useState(0)
  return (
  <>
    <h1>{count}</h1>
    <button onClick={()=>setCount((count)=>{
      return count+1
    })}>Inc</button>
    <button onClick={()=>setCount((count)=>{
      return count-1
    })}>Dec</button>
  </>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <h1>Hello world in react</h1>

    </div>
  )
}

export default App
