import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)  // useState is a hook which is provided by React
  // let name = "Rahul";  // normal variable declaration by default in javascript 
  // const state = useState("Ritesh");  // useState is a hook which is provided by React
  let [state,setState] = useState([]) // -> [value , function]
  let [count,setCount] = useState(0) // -> [value , function]


  // useEffect(); // 2 arguments  // 1-> function , 2nd -> array
  useEffect(()=>{
    const fetchDataFromApi = async ()=>{

      const url = "https://jsonplaceholder.typicode.com/todos";
      const response = await fetch(url);
      const data = await response.json();
      
      console.log(data[0])
      setState(data);
      // console.log(data[0]);
    }
    fetchDataFromApi();
  },[])

  const randomName = ()=>{
    let name = ["Rahul","Ritesh","Rajesh","Rajat","Raj"]
    let random = Math.floor(Math.random()*name.length)
    setState(name[random])
  }

// 1. useEffect -> function -> accepts 2 arguments 1. function -> run evertime when the data in
// the array changes 2. array -> array of data which we want to watch for changes

  return (
    <div>
      <h1>Hello world in react</h1>
      {state.map((item)=>{
        return (
          <div key={item.id}>
            <h5>{item.id}: {item.title}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default App

// react component based 
// you can consider these functions as components


// const Counter = ()=>{
//   const [count, setCount] = useState(0)
//   return (
//   <>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount((count)=>{
//       return count+1
//     })}>Inc</button>
//     <button onClick={()=>setCount((count)=>{
//       return count-1
//     })}>Dec</button>
//   </>
//   )
// }



