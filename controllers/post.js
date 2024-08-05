const Post = require("../models/post")

exports.getPost = (req, res) => {
    res.json({
        post: [
            {
                title: 'First Post'
            },
            {
                title: 'Second Post'
            },

        ]
    });
};

// exports.createPost = (req, res) => {
//     const post = new Post(req.body)
//     // console.log("Creating Post: ", post)
//     // console.log("Creating Post: ", req.body)
//     post.save((err, result) => {
//         if (err) {
//             return res.status(400).json({
//                 error: err
//             })
//         }
//         res.status(200).json({
//             post: result
//         })
//     })
// };

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
