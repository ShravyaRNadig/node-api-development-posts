const Post = require("../models/post")

exports.getPost = (req, res) => {
    const posts = Post.find()
        .then((posts) => {
            res.json({ posts: posts })
        })
        .catch((err) => { console.log(err) })
};


exports.createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        const result = await post.save();
        res.status(200).json({
            post: result
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
};
