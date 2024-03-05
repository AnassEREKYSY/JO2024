const express = require('express');

const router = express.Router();

const epreuvesController = require('../../controllers/admin/epreuves.controller');

router.route('/').get(epreuvesController.get_epreuves).post(epreuvesController.add_epreuve);
router.route("/list").get(epreuvesController.list_epreuves)
router.route('/:id').get(epreuvesController.get_epreuve).patch(epreuvesController.update_epreuve).delete(epreuvesController.delete_epreuve);
module.exports = router;
