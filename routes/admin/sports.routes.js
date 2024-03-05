const express = require('express');

const router = express.Router();

const sportsController = require('../../controllers/admin/sports.controller');

router.get('/', sportsController.get_sports);

module.exports = router;
