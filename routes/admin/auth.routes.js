const express = require('express');

const router = express.Router();

const authController = require('../../controllers/auth/authentication.controller');
const { verify_token } = require('../../utils/auth_middlware');

router.route('/login').post(authController.login);
router.route('/logout').post(authController.logout);
router.route('/add-user').post(authController.add_user);
router.route('/profile').get(verify_token ,authController.get_profile).patch(verify_token, authController.edit_me)
router.route('/profile/update-password').patch(verify_token ,authController.update_password)

module.exports = router;


