import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin:"40px auto",
  }
  return (
    <div className='container' style={myStyle}>
        <h3 className='my-3'>Todos List</h3>
        {props.todos.length===0? "No to dos to display":
        props.todos.map(todos=>{
          return (
            <>
          <TodoItem todos={todos} key={todos.sno} onDelete={props.onDelete}/><hr></hr> 
          </>
          )
        })};
    </div>
  )
}
