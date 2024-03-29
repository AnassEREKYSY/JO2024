const express = require('express');
const router = express.Router();

const authRoutes = require('./admin/auth.routes');
const { verify_token } = require('../utils/auth_middlware');

// Admin routes
router.use('/api/admin/auth', authRoutes);
router.use('/api/admin/sports', verify_token, require('./admin/sports.routes'));
router.use('/api/admin/epreuves', verify_token, require('./admin/epreuves.routes'));
router.use('/api/admin/athletes', verify_token, require('./admin/athletes.routes'));
router.use('/api/admin/resultats', verify_token, require('./admin/resultats.routes'));
router.use('/api/admin/titres', verify_token, require('./admin/titres.routes'));
router.use('/api/admin/pays', verify_token, require('./admin/pays.routes'));

// Public routes
router.use('/', require('./public/public.routes'));

//admin views routes

router.use('/admin', verify_token,require('./admin_views/admin_routes_views'));




module.exports = router;