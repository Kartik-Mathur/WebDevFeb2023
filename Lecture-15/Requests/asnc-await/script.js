let URL = 'https://cat-fact.herokuapp.com/facts'
const factsList = document.querySelector('.factsList');
const btn = document.querySelector('.btn');

function addDataToList(data) {
    data.forEach((d) => {
        let li = document.createElement('li');
        li.innerText = d;
        factsList.appendChild(li);
    })
}

async function getData(URL) {
    try {
        const res = await fetch(URL);
        const receivedData = await res.json();

        // Create array of data that we need to add to list
        const data = receivedData.map((d) => d.text);

        addDataToList(data);
    }
    catch (err) {
        console.log(err);
    }
}

function solve() {
    getData(URL);
}

btn.addEventListener('click', () => {
    solve();
})
