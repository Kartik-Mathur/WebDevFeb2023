// AJAX: Asynchronous JavaScript and XML
const URL = 'https://cat-fact.herokuapp.com/facts';
const xhr = new XMLHttpRequest();
const btn = document.querySelector('.btn');
const factsList = document.querySelector('.factsList');

// Request ke success par yeh chlega
xhr.onload = function(data){
    console.log(data);
    console.log(data.currentTarget.response);
    const res = JSON.parse(data.currentTarget.response);
    const factsData = res.map((d)=>d.text);
    console.log(factsData)

    addDataToList(factsData);
    // const data = res.text;
}

// Request ke fail hone par yeh chlega
xhr.onerror = function(){
    console.log("Lagg gai");
}

// Request kaha bhejni hai define karo
xhr.open("GET",URL);

// Request ko send kab krna hai?
btn.addEventListener('click',()=>{
    xhr.send();
})


function addDataToList(data) {
    data.forEach((d) => {
        let li = document.createElement('li');
        li.innerText = d;
        factsList.appendChild(li);
    })
}