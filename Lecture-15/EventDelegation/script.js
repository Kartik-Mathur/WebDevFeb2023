// Pick all the items where we want to add an Event
// const items = document.querySelectorAll('.item');

// console.log(items);

// items.forEach((item)=>{
//     item.addEventListener('click',(ev)=>{
//         console.log("Clicked",ev.target.innerText);
//     })
// })

// Better way is to add an Event on the parent container itself
const container = document.querySelector('.container');
container.addEventListener('click',(ev)=>{
    console.log(ev.target);
})