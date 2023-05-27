const path = require('path');
const express = require('express');
const postController = require('../controller/post');
const router = express.Router();

router.get('/addpost',postController.getAddPost);
router.post('/addpost',postController.postAddPost);
router.post('/deletepost',postController.postDeletePost);

router.get('/updatepost',postController.getUpdatePost);
router.post('/updatepost',postController.postUpdatePost);

router.get('/viewpost',postController.getViewPost);

router.post('/addcomment',postController.postAddComment);

router.get('/',postController.getPost);

module.exports = router;