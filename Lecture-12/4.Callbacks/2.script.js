function getMyPost(cb){
    console.log("Starting to fetch the post");
    setTimeout(()=>{
        let newImg = 'http://myimage.com/img';
        cb(newImg);
    },3000);
}


getMyPost(function(data){
    console.log(data);
})