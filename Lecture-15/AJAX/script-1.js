// AJAX: Asynchronous JavaScript and XML
const URL = 'https://cat-fact.herokuapp.com/facts';
const xhr = new XMLHttpRequest();
const btn = document.querySelector('.btn');
const factsList = document.querySelector('.factsList');

function myFetch(URL) {
    return new Promise((resolve, reject) => {
        // Request ke success par yeh chlega
        xhr.onload = function (data) {
            const res = JSON.parse(data.currentTarget.response);
            resolve(res);
            // const data = res.text;
        }

        // Request ke fail hone par yeh chlega
        xhr.onerror = function (err) {
            reject(err);
        }

        // Request kaha bhejni hai define karo
        xhr.open("GET", URL);

        // Request ko send kab krna hai?
        xhr.send();
    })
}

btn.addEventListener('click', (ev) => {
    myFetch(URL)
        .then((res) => {
            console.log(res);
        }).catch(err => console.log(err));
})

function addDataToList(data) {
    data.forEach((d) => {
        let li = document.createElement('li');
        li.innerText = d;
        factsList.appendChild(li);
    })
}