// () 
// (()=>{}), (function(){})
// (()=>{})()

let details = (()=>{
    let person = {
        name: 'Vaibav',
        age: 20
    }

    function updateMarks(m){
        person.marks = m;
    }

    updateMarks(90);
    console.log(person);
    function updateAge(a){
        person.age = a;
    }
    
    return {
        "updateAge": updateAge,
        "person": person
    }
})();

details.updateAge(100);
console.log(details.updateMarks(100));
console.log(details);


let ans = sum(10,20);