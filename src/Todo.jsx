import React, { useState } from 'react'
import Head from './Head.jsx'
import List from './List.jsx'
import './Todo.css'
export const Todo = () => {
 

       let [data,setData]=useState([])
         let [Data2,setData2]=useState([])
       let [input,setInput]=useState("")
       let [editinput,seteditInput]=useState("")
       let [store,setstore]=useState(null)
       
  return (
    <div className="todo-container">
    <div className="todo-title">Todo</div>
    <Head setstore={setstore} input={input} setInput={setInput} seteditInput={seteditInput}setData={setData} data={data} store={store}editinput={editinput} Data2={Data2} setData2={setData2}/>
       <List setData={setData} data={data} store={store}input={input} setInput={setInput} seteditInput={seteditInput}editinput={editinput}setstore={setstore} Data2={Data2} setData2={setData2} />
    </div>
  )
}

 export default Todo
