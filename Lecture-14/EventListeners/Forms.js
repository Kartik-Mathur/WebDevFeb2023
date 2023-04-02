const form = document.querySelector('form');
const inp = document.querySelector('#inp');
const inp1 = document.querySelector('#inp1');

form.addEventListener('submit',(ev)=>{
    ev.preventDefault();

    console.log(inp.value);
    console.log(inp1.value);
    inp.value = '';
    inp1.value = '';
})