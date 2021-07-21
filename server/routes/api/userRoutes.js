const router = require('express').Router();
const {
    createUser,
    getUserByID,
    login,
} = require('../../controllers/userController')

router.route('/').post(createUser);
router.route('/login').post(login);
router.route('/:id').get(getUserByID)

module.exports = router;
