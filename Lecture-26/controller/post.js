const Posts = require("../models/posts");

module.exports.getAddPost = (req,res,next)=>{
    res.render('addpost');
}

module.exports.postAddPost = (req,res,next)=>{
    const {imageUrl, title, description} = req.body;
    let newPost = new Posts(imageUrl,description,title);
    newPost.save()
        .then(()=>{
            res.redirect('/post');
        })
        .catch((err)=>{
            next(err);
        })
}

module.exports.getPost = (req,res,next)=>{
    Posts.getPosts()
        .then(data=>{
            console.log(data);
            res.render('posts',{
                data
            })
        })
        .catch(err=>{
            next(err);
        })
}

module.exports.postDeletePost = (req,res,next)=>{
    const {id} = req.body;
    Posts.deletePost(id)
        .then((data)=>{
            res.send(data);
        }).catch(err=>{
            next(err);
        })
}

module.exports.getUpdatePost = (req,res,next)=>{
    const {id} = req.query;
    Posts.getPost(id)
        .then((data)=>{
            // console.log(data);
            res.render('updatepost',{
                data
            })
        }).catch(err=>{
            next(err);
        })
}

module.exports.postUpdatePost = (req,res,next)=>{
    const {id,description,imageUrl,title} = req.body;
    let newPost = {
        id,description,imageUrl,title
    };
    Posts.updatePost(newPost)
        .then(()=>{
            res.redirect('/post');
        }).catch(err=>{
            next(err);
        })
}