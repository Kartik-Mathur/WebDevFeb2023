import React from 'react'

const Todoitem = ({ item }) => {
    return (
        <div>
            <div>
                {item.name}
                <button>↑</button>
                <button>↓</button>
                <button>X</button>
            </div>
        </div>
    )
}

export default Todoitem
