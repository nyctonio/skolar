import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

//  useState 
// useEffect

function App() {
  const [todos,setTodos] = useState([]); 
  const [todo,setTodo] = useState('');
  // checking if the page is loaded for the first time
  const [firstLoad ,setFirstLoad] = useState(true);
  // saving the data in the localstorage
  useEffect(() => {
    console.log(firstLoad);
    // checking if the page is loaded for the first time
    if(firstLoad){
      // getting the data from the localstorage
      const localTodos = localStorage.getItem('todos');
      // if the data is present in the localstorage
      if(localTodos){
        setTodos(JSON.parse(localTodos));
      }
      // setting the firstLoad to false
      setFirstLoad(false);
    }else{
      localStorage.setItem('todos',JSON.stringify(todos));
    }
  },[todos])

  return (
    <div className="App">
      <div>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} style={{
          padding: '10px',
          width:'300px'
        }} type="text" />
        <button onClick={()=>{
          // is the todo is empty or not
          if(todo == ''){
            alert('Please enter todo');
            return;
          }
          const _todo ={
            id:uuidv4(),
            value:todo,
          }
          // adding the current todo in todos array
          setTodos([...todos,_todo]);
          setTodo('');
        }}>Add Todo</button>
      </div>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id} style={{
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center',
            }}>
                <p>{todo.value}</p>
                <button onClick={()=>{
                  const editValue = prompt('Enter edit value');
                  if(editValue == ''){
                    alert('Please enter todo');
                    return;
                  }
                  const newTodo = todos.map((item) => {
                    if(item.id === todo.id){
                      item.value = editValue;
                    }
                    return item;
                  })
                  setTodos(newTodo);
                }}>Edit</button> 
                <button onClick={()=>{
                  let newTodo = todos.filter((item) => item.id !== todo.id);
                  console.log(newTodo)
                  setTodos(newTodo);
                }}>Delete</button>
            </div>
          )})}
      </div>

    </div>
  )
}

export default App
