import React, { useState } from 'react'
import Todoinput from '../Todoinput/Todoinput';
import Todolist from '../Todolist/Todolist';
import { v4 as uuidv4 } from 'uuid';

const initialTodos = [
    {name: 'Cricket', id: 1},
    {name: 'Swimming', id: 2},
    {name: 'Basketball', id: 3},
    {name: 'Dance', id: 4}
];

const Todo = () => {
    const [todos, setTodos] = useState(initialTodos);

    const updateTodo = (newTask) =>{
        // console.log("Naya Task: ",newTask);
        setTodos([{name:newTask,id: uuidv4()},...todos]);
    }
    // Yeh neeche wala sahi nahi hai krna
    // const newTodo = todos;
    // newTodo.push(newTask);
    // setTodos(newTodo);
    // Yeh neeche wala sahi hai krna
    // const newTodo =[];
    // todos.map((i)=>{
    //     newTodo.push(i);
    // })
    // newTodo.push(newTask);
    return (
        <div>
            <Todoinput updateTodo={updateTodo} />
            <Todolist todos={todos} />
        </div>
    )
}

export default Todo
