const express = require('express');
const router = express.Router();

const authRoutes = require('./admin/auth.routes');
const { verify_token } = require('../utils/auth_middlware');

// Admin routes
router.use('/api/admin/sports', verify_token, require('./admin/sports.routes'));
router.use('/api/admin/epreuves', verify_token, require('./admin/epreuves.routes'));
router.use('/api/admin/athletes', verify_token, require('./admin/athletes.routes'));
router.use('/api/admin/resultats', verify_token, require('./admin/resultats.routes'));
router.use('/api/admin/titres', verify_token, require('./admin/titres.routes'));
router.use('/api/admin/pays', verify_token, require('./admin/pays.routes'));
router.use('/api/admin/auth', authRoutes);

// Public routes
router.use('/', require('./public/public.routes'));


module.exports = router;