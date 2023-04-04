// https://cat-fact.herokuapp.com/facts
let URL = 'https://cat-fact.herokuapp.com/facts'
const factsList = document.querySelector('.factsList');
const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    fetch(URL)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        data.forEach((d)=>{
            console.log(d.text);
            let li = document.createElement('li');
            li.innerText = d.text;
            factsList.appendChild(li);
        })
    })
    .catch((err)=>console.log(err.message));
})

