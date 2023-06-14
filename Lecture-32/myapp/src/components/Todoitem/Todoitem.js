import React from 'react'

const Todoitem = ({task}) => {
    
    return (
        <li>
            {task.name}
            <button>↑</button>
            <button>↓</button>
            <button>X</button>
        </li>
    )
}

export default Todoitem
