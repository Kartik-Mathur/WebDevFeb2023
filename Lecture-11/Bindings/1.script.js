let person = {
    name: 'Vaibhav',
    marks: 90,
    isPass: function(){
        if(this.marks>40){
            console.log("Pass Hai");
            this.certificate = true;
        }
        else{
            console.log("Fail Hai");
            this.certificate = false;
        }
    }
}

person.isPass();
console.log(person);

console.log(this);
// console.log(global);