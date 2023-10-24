const { Router } = require('express');

const authController = require('../controllers/authController');
const { validationMiddleware } = require('../middlewares/validationMiddleware');
const schemaAuth = require('../validations/authSchema');

const authRouter = Router();

authRouter.post('/login',
    validationMiddleware(schemaAuth),
    authController.login
);

module.exports = authRouter;