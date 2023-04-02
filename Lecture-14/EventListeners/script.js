const btn = document.querySelector('.btn');
const p = document.querySelector('p');
// Event Listener lagane ka tareeka
btn.addEventListener('dblclick',()=>{
    console.log("Clicking it using dblclick");
    
})

p.addEventListener('mouseenter',(ev)=>{
    console.log(ev.target);
    ev.target.classList.add('changeColor');
})

p.addEventListener('mouseleave',(ev)=>{
    // console.log(ev.target);
    ev.target.classList.remove('changeColor');
})

p.addEventListener('click',(ev)=>{
    // ev.target.remove();
})



// let ev1 = btn.addEventListener('click', () => {
//     console.log('Merko ek sapna aaya 1 kalol ka');
// })

// function rajaskaSapna() {
//     console.log('Rajas ki 25LPA ki job lagg gai');
// }

// let ev2 = btn.addEventListener('click',rajaskaSapna);

// setTimeout(() => {
//     btn.removeEventListener("click",rajaskaSapna);
// }, 5000);



// console.log(btn)
// btn.onclick = ()=>{
//     console.log("Rajas ne 1 kalol ka spna dekha");
// }


// btn.onclick = ()=>{
//     console.log("Rajas ki 25LPA ki job lagg gai");
// }