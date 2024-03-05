const express = require('express');
const resultatsController = require('../../controllers/admin/resultats.controller');

const router = express.Router();


router.route('/').get(resultatsController.get_resultats).post(resultatsController.add_resultat);
router.route("/list").get(resultatsController.list_resultats)
router.route('/:id').get(resultatsController.get_resultat).patch(resultatsController.update_resultat).delete(resultatsController.delete_resultat);
module.exports = router;
