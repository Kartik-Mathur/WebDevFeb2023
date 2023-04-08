function add(a,b,...args){
    console.log(args)
    let sum = args.reduce((accum,val)=>accum+val,0);
    console.log(a+b+sum);
}

add(1,2,3,4,5,6,7,8,9,10);