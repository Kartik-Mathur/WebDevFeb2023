import React from 'react'
import Todoitem  from '../TodoItem/Todoitem';

const Todolist = (props) => {
    const todos = props.todos;
    
    return (
        <>
            {
                todos.map((item,indx)=>
                <Todoitem 
                    updateCheckBox={props.updateCheckBox}
                    upShow={ indx!= 0? true: false} 
                    key={item.id} 
                    item={item} 
                    downShow={indx!=todos.length-1 ? true: false}
                />)
            }
        </>
    )
}

export default Todolist
