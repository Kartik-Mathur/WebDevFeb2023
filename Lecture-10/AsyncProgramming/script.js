function waitASec(){
    let startTime = new Date().getTime();
    while(startTime+1000>new Date().getTime()){

    }
}

function waitNSec(n){
    for(let i = 0 ; i < n ; i++){
        waitASec();
    }
    console.log("Hello Welcome to site");
}

waitNSec(3);

