const express = require('express');
const router = express.Router();

const sportsRoutes = require('./admin/sports.routes');

router.use('/admin/sports', sportsRoutes);

module.exports = router;