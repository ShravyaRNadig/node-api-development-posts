const router = require('express').Router();
const postControllers = require('../controllers/post')
const validator = require("../validator/index")

router.get('/get', postControllers.getPost);
router.post('/post',validator.createPostValidator, postControllers.createPost);

module.exports = router;