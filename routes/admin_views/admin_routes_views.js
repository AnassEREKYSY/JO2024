const express = require('express');
const { add_sport_view, get_sports_views, get_sports } = require('../../controllers/admin/sports.controller');
const { get_athletes_view, add_athlete_view } = require('../../controllers/admin/athletes.controller');
const { add_epreuve_view, get_epreuves_view } = require('../../controllers/admin/epreuves.controller');
const { get_pays_view, add_pays_view } = require('../../controllers/admin/pays.controller');
const { add_resultat_view } = require('../../controllers/admin/resultats.controller');
const { add_titre_view } = require('../../controllers/admin/titres.controller');
const router = express.Router();

router.get('/sports', get_sports_views);
router.get('/sports/add', add_sport_view);

router.get('/athletes', get_athletes_view);
router.get('/athletes/add', add_athlete_view);

router.get('/epreuves', get_epreuves_view);
router.get('/epreuves/add', add_epreuve_view);

router.get('/pays', get_pays_view);
router.get('/pays/add', add_pays_view);

router.get('/resultats/add', add_resultat_view);

router.get('/titres/add', add_titre_view);



module.exports = router;
