const router = require('express').Router();
const postControllers = require('../controllers/post')


router.get('/get', postControllers.getPost);
router.post('/post', postControllers.createPost);

module.exports = router;