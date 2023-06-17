import React from 'react'

const Todoitem = (props) => {
    let {task} = props;
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
