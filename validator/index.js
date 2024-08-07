exports.createPostValidator = (req, res, next) => {
    // title
    req.check('title', "Write a title").notEmpty()
    req.check('title', "Title must be between 4 - 150 Characters").isLength({
        min: 4,
        max: 150
    });

    // body
    req.check('body', "Write a body").notEmpty()
    req.check('body', "Body must be between 4 - 2000 Characters").isLength({
        min: 4,
        max: 2000
    });

    // check for multiple errors

    const errors = req.validationErrors();
    // if error shows the first one as they happen

    if(errors){
        const firstError = errors.map((error)=>error.msg)[0] // takes function as argument
        return res.status(400).json({error: firstError})
    }

    // proceed to next middleware
    next();
}