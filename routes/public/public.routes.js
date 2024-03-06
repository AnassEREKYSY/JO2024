const express = require('express');
const { get_sports, get_sport, list_sports, list_pays, get_athletes, get_athlete, get_epreuves, get_epreuve, get_titres, get_titre, login } = require('../../controllers/public_views/public.controller');
const router = express.Router();

router.route('/sports').get(get_sports);
router.route('/sports/:id').get(get_sport);
router.route('/sports/list').get(list_sports);
router.route('/pays/list').get(list_pays);
router.route('/athletes').get(get_athletes);
router.route('/athletes/:id').get(get_athlete);
router.route('/epreuves').get(get_epreuves);
router.route('/epreuves/:id').get(get_epreuve);
router.route('/titres').get(get_titres);
router.route('/titres/:id').get(get_titre);
router.route('/login').get(login)


module.exports = router;


