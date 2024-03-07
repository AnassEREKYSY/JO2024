const db = require("../../models");
const handleQuery = require("../../utils/handle_query");
const { Op } = require("sequelize");

exports.get_athletes = async (req, res) => {
  return handleQuery(db.athlete, req, res, {}, {});
};
exports.get_athletes_view = async (req, res) => {
  const athletes = await db.athlete.findAll();
  res.render("templates/athlete/athletes", {
    athletes: athletes,
    active: "athletes"
  });
};

exports.add_athlete_view = async (req, res) => {
  try{
    
    const pays = await db.pays.findAll();
    const sports = await db.sport.findAll();
    res.render("templates/athlete/addEditAthlete", {
      pays: pays,
      sports: sports
    });
    
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  
  }
}

exports.add_athlete = async (req, res) => {
  try {
    const filename = '/uploads/' + req.file.filename
    const athlete = await db.athlete.create({nom:req.body.nom, prenom:req.body.prenom, sexe:req.body.sexe, date_naissance:req.body.date_naissance, photo:`${filename}`, sport_id:req.body.sport_id, pays_id:req.body.pays_id});
    return res.status(201).json({
      status: "success",
      data: {
        athlete,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}

exports.get_athlete = async (req, res) => {
  try {
    const athlete = await db.athlete.findByPk(req.params.id);
    if (!athlete) {
      return res.status(404).json({
        status: "fail",
        message: "Athlete not found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: {
        athlete,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}

exports.update_athlete = async (req, res) => {
  try {
    const athlete = await db.athlete.findByPk(req.params.id);
    if (!athlete) {
      return res.status(404).json({
        status: "fail",
        message: "Athlete not found",
      });
    }
    await athlete.update(req.body);
    return res.status(200).json({
      status: "success",
      data: {
        athlete,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}

exports.delete_athlete = async (req, res) => {
  try {
    const athlete = await db.athlete.findByPk(req.params.id);
    if (!athlete) {
      return res.status(404).json({
        status: "fail",
        message: "Athlete not found",
      });
    }
    await athlete.destroy();
    return res.redirect('/admin/athletes');
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}

exports.list_athletes = async (req, res) => {
  try{
    const athletes = await db.athlete.findAll();
    return res.status(200).json({
      status: "success",
      list:athletes
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}
