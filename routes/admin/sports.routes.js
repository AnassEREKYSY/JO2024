const express = require('express');

const router = express.Router();

const sportsController = require('../../controllers/admin/sports.controller');
const { verify_token } = require('../../utils/auth_middlware');
const upload = require('../../utils/upload_middleware');


  

router.route('/').get(sportsController.get_sports).post(upload.single('image'),sportsController.add_sport);
router.route('/list').get(sportsController.list_sports)
router.route('/:id').delete(sportsController.delete_sport).get(sportsController.get_sport).patch(sportsController.update_sport);
router.route('/:id/delete').get(sportsController.delete_sport)

module.exports = router;
