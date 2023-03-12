function outerFun(){
    let money = 110;
    function innerFun(){
        money ++;
        console.log(money);
    }
    return innerFun;
}

let fun = outerFun();
let fun1 = outerFun();
fun(); // 111, 111
fun(); // 111, 112
fun(); // 111, 113
fun(); // 111, 114
fun1();
fun1();
