// const { validationResult } = require('express-validator');

// const validationMiddleware = (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ mensagem: errors.array() });
//     }
//     next();
// };

const validationMiddleware = joiSchema => async (req, res, next) => {
    try {
        await joiSchema.validateAsync(req.body);
        next()
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
};


module.exports = {
    validationMiddleware
};