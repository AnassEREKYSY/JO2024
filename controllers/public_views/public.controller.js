const db = require("../../models");
const handleQuery = require("../../utils/handle_query");

exports.get_sports = async (req, res) => {
  return handleQuery(db.sport, req, res, {}, {});
};

exports.get_sport = async (req, res) => {
  try {
    const sport = await db.sport.findOne({ where: { id: req.params.id } });
    res.status(200).json(sport);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.list_sports = async (req, res) => {
  try {
    const sports = await db.sport.findAll();
    res.status(200).json(sports);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.list_pays = async (req, res) => {
  try {
    const pays = await db.pays.findAll();
    res.status(200).json(pays);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.get_athletes = async (req, res) => {
  return handleQuery(db.athlete, req, res, {}, {});
};

exports.get_athlete = async (req, res) => {
  try {
    const athlete = await db.athlete.findOne({ where: { id: req.params.id } });
    res.status(200).json(athlete);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.get_epreuves = async (req, res) => {
  return handleQuery(db.epreuve, req, res, {}, {});
};

exports.get_epreuve = async (req, res) => {
  try {
    const epreuve = await db.epreuve.findOne({ where: { id: req.params.id } });
    res.status(200).json(epreuve);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.get_titres = async (req, res) => {
  return handleQuery(db.titre, req, res, {}, {});
}

exports.list_titre = async (req, res) => {
  try {
    const titres = await db.titre.findAll();
    res.status(200).json(titres);
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.get_titre = async (req, res) => {
  try {
    const titre = await db.titre.findOne({ where: { id: req.params.id } });
    res.status(200).json(titre);
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.login = async (req, res) => {
  try{
    return res.render('templates/user/login') 
  } catch(err) {
    res.status(500).json(err);
  }
}