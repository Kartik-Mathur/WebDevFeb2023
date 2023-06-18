import React,{useRef} from 'react'

const Todoinput = (props) => {
    const {updateTodo} = props;
    const newtask = useRef("");
    
    const buttonClickHandler = (ev)=>{
        updateTodo(newtask.current.value);
    }

    return (
        <div>
            <input 
            type="text"
            ref = {newtask}
            />

            <button onClick={buttonClickHandler}>Add Task</button>
        </div>
    )
}

export default Todoinput
