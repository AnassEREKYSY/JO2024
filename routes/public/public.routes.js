const express = require('express');
const { get_sports, get_sport, list_sports, list_pays, get_athletes, get_athlete, get_epreuves, get_epreuve, get_titres, get_titre, login, forgot_password, reset_password } = require('../../controllers/public_views/public.controller');
const router = express.Router();

router.route('/').get(get_sports);
router.route('/sports/:id').get(get_sport);
router.route('/sports/list').get(list_sports);
router.route('/pays').get(list_pays);
router.route('/athletes').get(get_athletes);
router.route('/athletes/:id').get(get_athlete);
router.route('/epreuves').get(get_epreuves);
router.route('/epreuves/:id').get(get_epreuve);
router.route('/titres').get(get_titres);
router.route('/titres/:id').get(get_titre);
router.route('/login').get(login)
router.route('/forgot-password').get(forgot_password)
router.route('/reset-password').get(reset_password)



module.exports = router;



