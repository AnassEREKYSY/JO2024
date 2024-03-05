const express = require('express');
const titresController = require('../../controllers/admin/titres.controller');

const router = express.Router();


router.route('/').get(titresController.get_titres).post(titresController.add_titre);
router.route('/list').get(titresController.list_titres)
router.route('/:id').get(titresController.get_titre).patch(titresController.update_titre).delete(titresController.delete_titre);

module.exports = router;
