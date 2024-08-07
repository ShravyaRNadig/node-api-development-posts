const router = require('express').Router();
const {getPost,createPost} = require('../controllers/post')
const validator = require("../validator/index")

router.get('/get', getPost);
router.post('/post',createPost);
// router.post('/post',validator.createPostValidator,createPost);

module.exports = router;