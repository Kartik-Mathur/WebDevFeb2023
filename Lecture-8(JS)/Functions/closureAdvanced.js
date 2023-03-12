function outerFun() {
    let money = 110;
    function innerFun() {
        money++;
        // let a = 10;
        function innerMostFun() {
            money++;
            // a++;
            console.log(money);
            // console.log("a: ",a);
        }
        return innerMostFun;
    }
    return innerFun;
}

let fun = outerFun();
let fun1 = fun();
// let fun2 = fun();

fun1();
fun1();
fun1();
// fun2();
// fun2();
fun1();
