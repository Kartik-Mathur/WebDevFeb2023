import React from 'react'
import Todoinput from '../Todoinput/Todoinput';
import Todolist from '../Todolist/Todolist';
import Todoheading from '../Todoheading/Todoheading';

const Todo = () => {
    return (
        <div>
            <Todoheading />
            <Todoinput />
            <Todolist />
        </div>
    )
}

export default Todo
