const form = document.querySelector('form');
const taskList = document.querySelector('.taskList');
const taskItem = document.querySelector('#newtask');

// form.addEventListener('submit',(ev)=>{
//     ev.preventDefault();
//     let taskName = taskItem.value;
//     // console.log(task);

//         axios.post('/addtodo',{
//             newtask: taskName
//         }).then((data)=>{
//             console.log(data.data);
//             newtask.value = '';
//         })
//         .catch(err=>{
//             console.log(err)
            
//         })
// })

function addToTaskList(todos){
    taskList.innerText = '';
    todos.forEach((t)=>{
        let li = document.createElement('li');
        li.innerText = t;
        taskList.appendChild(li);
    })
}

form.addEventListener('submit',async (ev)=>{
    ev.preventDefault();
    let taskName = taskItem.value;
    // console.log(task);
    try{
        let data = await axios.post('/addtodo',{
            newtask: taskName
        });
        let todos = data.data;
        // console.log(todos);
        addToTaskList(todos);
    }catch(err){
        console.log(err);
    }
    newtask.value = '';
})