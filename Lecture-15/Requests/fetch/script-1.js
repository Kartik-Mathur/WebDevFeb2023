let URL = 'https://cat-fact.herokuapp.com/facts'
const factsList = document.querySelector('.factsList');
const btn = document.querySelector('.btn');

function getData(URL) {
    return new Promise((resolve, reject) => {
        fetch(URL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((err) => reject(err));
    })
}

function addDataToList(data) {
    data.forEach((d) => {
        let li = document.createElement('li');
        li.innerText = d.text;
        factsList.appendChild(li);
    })
}


function solve() {
    getData(URL)
        .then((data) => {
            addDataToList(data);
        })
        .catch(err => {
            console.log(err);
        })
}

btn.addEventListener('click', () => {
    solve();
})
