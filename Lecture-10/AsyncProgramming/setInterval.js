let id = setInterval(function(){
    console.log("Naacho");
},1);



setTimeout(function(){
    clearInterval(id);
},5000);



console.log(id);