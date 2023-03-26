function download(url){
    let downloadedMovie = url.split('/').pop();

    compression(downloadedMovie,upload);
}


download('http://movies.com/kuwaraBaap.mp4');