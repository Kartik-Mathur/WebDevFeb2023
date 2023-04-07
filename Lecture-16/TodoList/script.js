const taskList = document.querySelector('.taskList');
const btn = document.querySelector('.btn');
const inp = document.querySelector('.inp');


let tasks = [];

function addTaskToList(data) {
    // taskList.innerText = '';
    let li = document.createElement('li');
    li.classList.add('item')
    let str = `<div class="taskInput">
        <input class="checkbox" type="checkbox">
        <span class="task">${data[data.length-1]}</span>
    </div>

    <div class="buttons">
        <span class="upArrow">↑</span>
        <span class="downArrow">↓</span>
        <span class="deleteTask">🗑</span>
    </div>`
    li.innerHTML = str;
    taskList.appendChild(li);

    // data.forEach(element => {
    //     let li = document.createElement('li');
    //     li.innerText = element;
    //     taskList.appendChild(li);
    // });
    // console.log(data);
}

btn.addEventListener('click', (e) => {
    console.log(inp.value);
    tasks.push(inp.value);

    addTaskToList(tasks);
})


// Adding Events
taskList.addEventListener('click',(e)=>{
    let kaunClickHua = e.target.getAttribute('class');
    if(kaunClickHua === 'upArrow'){
        let currentItem = e.target.parentElement.parentElement;
        let previousSibling = currentItem.previousElementSibling;
        // console.log(previousSibling)
        taskList.insertBefore(currentItem,previousSibling)
    }
    else if(kaunClickHua === 'downArrow'){
        let currentItem = e.target.parentElement.parentElement;
        let previousSibling = currentItem.nextElementSibling;
        // console.log(previousSibling)
        taskList.insertBefore(previousSibling,currentItem)
    }
    else if(kaunClickHua === 'deleteTask'){
        let currentItem = e.target.parentElement.parentElement;
        currentItem.remove();
    }
    else if(kaunClickHua === 'checkbox'){
        let currentCheckbox = e.target;
        let textJisparLineChangeHogi = currentCheckbox.nextElementSibling;
        textJisparLineChangeHogi.classList.toggle('lineCut');
        console.log(textJisparLineChangeHogi.classList);
    }
})