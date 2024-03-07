const express = require('express');

const router = express.Router();

const { verify_token } = require('../../utils/auth_middlware');
const athletesController = require('../../controllers/admin/athletes.controller');
const upload = require('../../utils/upload_middleware');

router.route('/').get(athletesController.get_athletes).post(upload.single('photo'),athletesController.add_athlete);
router.route('/list').get(athletesController.list_athletes)
router.route('/:id').get(athletesController.get_athlete).patch(athletesController.update_athlete).delete(athletesController.delete_athlete);
router.route('/:id/delete').get(athletesController.delete_athlete)

module.exports = router;
