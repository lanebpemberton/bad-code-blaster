const router = require('express').Router();
const {
    createUser,
    getUserById,
    login,
} = require('../../controllers/userController');

router.get("/:id", getUserById);
router.post('/', createUser);
router.post('/login', login);


module.exports = router;
