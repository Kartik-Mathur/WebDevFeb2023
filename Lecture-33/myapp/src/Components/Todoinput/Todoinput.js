import React, { useState } from 'react'

const Todoinput = (props) => {
    const { updateTodo } = props;
    const [newtask, setNewtask] = useState("");

    const btnClickHandler = () => {
        updateTodo(newtask);
        setNewtask("");
    }

    const inputChangeHandler = (ev)=>{
        // console.log(ev.target.value);
        setNewtask(ev.target.value);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter New Task"
                onChange={inputChangeHandler}
                value={newtask}
            />
            <button onClick={btnClickHandler}>Add Task</button>
        </div>
    )
}

export default Todoinput
