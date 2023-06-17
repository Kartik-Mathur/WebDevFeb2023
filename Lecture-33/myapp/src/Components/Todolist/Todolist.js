import React from 'react'
import Todoitem from '../TodoItem/Todoitem';

const Todolist = (props) => {
    const {todos} = props;
    return (
        <div>
            {todos.map((t)=>{
                return <Todoitem key={t.id} item={t} />
            })}
        </div>
    )
}

export default Todolist
