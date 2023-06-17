import React from 'react'
import styles from './Todoitem.module.css';

const Todoitem = ({ item }) => {
    return (
        <>
            <div className={styles.todoItem}>
                {item.name}
                <button>↑</button>
                <button>↓</button>
                <button>X</button>
            </div>
        </>
    )
}

export default Todoitem
