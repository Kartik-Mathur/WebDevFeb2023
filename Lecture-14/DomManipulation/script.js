// window.onload = function () {
// 1. Pick an element to perform some operation
// Pick using TagName
let lists = document.getElementsByTagName('li');
console.log(lists);

// Pick using Id
const para1 = document.getElementById('para1');
console.log(para1);

// Pick using Class
const allPara = document.getElementsByClassName('para');
console.log(allPara);

// querySelector
const paras = document.querySelectorAll('p');
// const paras = document.querySelector('p');
console.log(paras)

const item1 = document.querySelector('.item1');
console.log(item1);

const item2 = document.querySelector('#item2');
console.log(item2);

// READING VALUE OF AN ELEMENT
console.log(item2.innerText)
console.log(item2.innerHTML)


// CHANGING THE VALUE OF AN ELEMENT
// item2.innerText = '<b>Ironman</b>';
item2.innerHTML = '<b>Ironman</b>';


// Adding a new element
const movieList = document.querySelector('.list')
console.log(movieList);

// movieList.innerHTML += '<li class="item4 listitem">Hulk</li>'
// Best way to add a new element:
// 1.Ek naya empty element banao
let li = document.createElement('li');

// 2. Element ke andar ki value update karlo
li.innerText = 'Hulk';

// 3. Jaakar is element ko parent ke andar append kardo
movieList.appendChild(li);

movieList.removeChild(item2);
// }
