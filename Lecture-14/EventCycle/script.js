const grandfather = document.querySelector('.grandfather');
const father = document.querySelector('.father');
const mother = document.querySelector('.mother');

grandfather.addEventListener('click',(ev)=>{
    console.log("Rukk tere papa ko bataunga");
})

father.addEventListener('click',(ev)=>{
    console.log("Belt se service ghar baithe baithe");
    ev.stopPropagation();
})

mother.addEventListener("click",(ev)=>{
    console.log("Roti bana rhi thi, ussi chimte se pakad lia")
})
