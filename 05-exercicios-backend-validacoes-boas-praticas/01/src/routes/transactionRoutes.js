const { Router } = require('express');

const authMiddleware = require('../middlewares/authMiddlewares');
const transactionController = require('../controllers/transactionController');
const { validationMiddleware, validationMiddlewareParams } = require('../middlewares/validationMiddleware');
const schemaTransactions = require('../validations/transactionSchema');
const { schemaUserId } = require('../validations/userSchema');
// const transactionMiddlewares = require('../middlewares/transactionMiddlewares');

const transactionRouter = Router();

transactionRouter.get('/transacao',
    authMiddleware.verifyLoggedUser,
    transactionController.getAllTransactions
);

transactionRouter.get('/transacao/extrato',
    authMiddleware.verifyLoggedUser,
    transactionController.getExtract
);


transactionRouter.get('/transacao/:id',
    authMiddleware.verifyLoggedUser,
    validationMiddleware(schemaTransactions),
    transactionController.getTransactionById
);

transactionRouter.put('/transacao/:id',
    authMiddleware.verifyLoggedUser,
    validationMiddlewareParams(schemaUserId),
    validationMiddleware(schemaTransactions),
    transactionController.updateTransaction
);

transactionRouter.post('/transacao',
    authMiddleware.verifyLoggedUser,
    validationMiddlewareParams(schemaUserId),
    transactionController.registerTransaction
);

transactionRouter.delete('/transacao/:id',
    authMiddleware.verifyLoggedUser,
    validationMiddlewareParams(schemaUserId),
    transactionController.deleteTransaction
);


module.exports = transactionRouter;
