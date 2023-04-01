function download(url) {
    return new Promise((resolve, reject) => {
        if (url.split('.').pop() != 'mp4') return reject("Sahi file bhej be");

        console.log("Download start");
        setTimeout(() => {
            console.log("Download completed",url.split('/').pop());
            resolve(url.split('/').pop())
        }, 3000);
    })
}

function compress(file) {
    return new Promise((resolve, reject) => {
        console.log("Compression starts");
        setTimeout(() => {
            let cfile = file.split('.')[0] + '.zip';
            console.log("Compression completed",cfile);
            resolve(cfile);
        }, 3000);
    })
}

function upload(file) {
    return new Promise((resolve, reject) => {
        console.log("Uploading starts");
        setTimeout(()=>{
            let newUrl = 'http://anotherMovie.com/'+file;
            console.log("Uploading completed",newUrl);
            resolve(newUrl);
        },3000);
    })
}

download('http://movies.com/singham.mp4')
    .then(compress)
    .then(upload)
    .then((newUrl)=>{
        console.log("All done",newUrl);
    })
    .catch(err => console.log(err));

// download('http://movies.com/singham.mp4')
//     .then((file) => {
//         console.log("Downloaded file", file);
//         compress(file).then((compressedFile) => {
//             console.log("Compressed File", compressedFile);
//         })
//     })
//     .catch(err => console.log(err));