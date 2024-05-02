const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddlewares');

const categoryRouter = Router();

categoryRouter.get('/categoria',
    authMiddleware.verifyLoggedUser,
    categoryController.getAllCategories
);

module.exports = categoryRouter;