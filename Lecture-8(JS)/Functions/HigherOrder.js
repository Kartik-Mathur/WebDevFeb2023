function Vehicle(Fortuner) { 
    // Fortuner=function Fortuner() {
        // console.log("Inside Fortuner");
    // }
    Fortuner();
}

Vehicle(function Fortuner() {
    console.log("Inside Fortuner");
});

function movies(){

    function KuwaraBaap(){
        console.log("Kuwara Baap");
    }

    function jabWeMet(){
        console.log("Jab We Met");
    }

    return KuwaraBaap;
}

let movie = movies();
movie();