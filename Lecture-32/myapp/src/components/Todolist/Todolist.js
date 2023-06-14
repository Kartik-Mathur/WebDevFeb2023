import React from 'react'
import Todoitem from '../Todoitem/Todoitem'

const todos = [
    { id: 1, name: "Cricket" },
    { id: 2, name: "Hockey" },
    { id: 3, name: "Badminton" },
    { id: 4, name: "Basketball" }
]

const Todolist = () => {
    return (
        <div>
            <ul>
                {todos.map(item=><Todoitem key={item.id} task={item} />)}
            </ul>
        </div>
    )
}


// const Todolist = () => {
//     return (
//         <div>
//             <ul>
//                 {todos.map(item => <li>{item.name}
//                     <button>↑</button>
//                     <button>↓</button>
//                     <button>X</button>
//                 </li>)}
//             </ul>
//         </div>
//     )
// }

export default Todolist
