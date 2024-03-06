const express = require('express');
const router = express.Router();

const authRoutes = require('./admin/auth.routes');
const { verify_token } = require('../utils/auth_middlware');

router.use('/admin/sports', verify_token, require('./admin/sports.routes'));
router.use('/admin/epreuves', verify_token, require('./admin/epreuves.routes'));
router.use('/admin/athletes', verify_token, require('./admin/athletes.routes'));
router.use('/admin/resultats', verify_token, require('./admin/resultats.routes'));
router.use('/admin/titres', verify_token, require('./admin/titres.routes'));
router.use('/admin/pays', verify_token, require('./admin/pays.routes'));

router.use('/admin/auth', authRoutes);

module.exports = router;