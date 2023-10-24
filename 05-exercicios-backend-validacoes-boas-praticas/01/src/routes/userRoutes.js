const { Router } = require('express');

const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddlewares');

// const { validationCreateNewUser, validationUpdateUser } = require('../middlewares/userMiddlewares');
const { validationMiddleware } = require('../middlewares/validationMiddleware');
const schemaUsers = require('../validations/userSchema');

const userRouter = Router();

userRouter.post('/usuario',
    validationMiddleware(schemaUsers),
    userController.createNewUser
);

userRouter.put("/usuario",
    authMiddleware.verifyLoggedUser,
    validationMiddleware(schemaUsers),
    userController.userUpdate
);

userRouter.get('/usuario',
    authMiddleware.verifyLoggedUser,
    userController.loggedUserDetails
);


module.exports = userRouter;