const express = require('express');
const paysController = require('../../controllers/admin/pays.controller');

const router = express.Router();

router.route('/').get(paysController.get_pays).post(paysController.add_pays);
router.route('/list').get(paysController.list_pays);
router.route('/:id').get(paysController.get_one_pays).patch(paysController.update_pays).delete(paysController.delete_pays);

module.exports = router;
