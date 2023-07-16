const btn = document.querySelector('#btn');

function clickHandler(ev){
    console.log('Clicked');
}


// btn.addEventListener('click', debounce(clickHandler,2000));
btn.addEventListener('click', throttle(clickHandler,2000));

function throttle(f, delay){
    let callHuaPadaHai  = false;
    return (...args)=>{
        if(!callHuaPadaHai){
            callHuaPadaHai = true;
            f(...args);
            setTimeout(()=>{
                callHuaPadaHai = false;
            },delay)
        }
    }
}

function debounce(f, delay){
    let id;
    console.log("Abhi wali id: "+id);
    return (...args)=>{
        console.log("Pehle wali id: "+id);
        if(id) clearTimeout(id);
        id = setTimeout(()=>{
            f(...args);
        },delay)
    }
}



