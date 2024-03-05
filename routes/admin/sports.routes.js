const express = require('express');

const router = express.Router();

const sportsController = require('../../controllers/admin/sports.controller');
const { verify_token } = require('../../utils/auth_middlware');

router.route('/').get(sportsController.get_sports).post(sportsController.add_sport);
router.route('/list').get(sportsController.list_sports)
router.route('/:id').delete(sportsController.delete_sport).get(sportsController.get_sport).patch(sportsController.update_sport);


module.exports = router;
