const db = require("../../models");
const handleQuery = require("../../utils/handle_query");
const { Op } = require("sequelize");

exports.get_sports = async (req, res) => {
  try{
    const sports = await db.sport.findAll();
    return res.status(200).json({
      status: "success",
      data: {
        sports,
      },
    });
  }catch(err){

  }
  
};
exports.get_sports_views = async (req, res) => {
  const sports = await db.sport.findAll();
  res.render("templates/sport/sports", {
    sports: sports,
    active: "sports"
  });
};


exports.add_sport_view = async (req, res) => {
  res.render("templates/sport/addEditSport");
}

exports.add_sport = async (req, res) => {
  try {
    const filename = '/uploads/' + req.file.filename
    const sport = await db.sport.create({name:req.body.name, image:filename});
    return res.status(201).json({
      status: "success",
      data: {
        sport,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.get_sport = async (req, res) => {
  try {
    const sport = await db.sport.findByPk(req.params.id);
    if (!sport) {
      return res.status(404).json({
        status: "fail",
        message: "Sport not found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: {
        sport,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.update_sport = async (req, res) => {
  try {
    const sport = await db.sport.findByPk(req.params.id);
    if (!sport) {
      return res.status(404).json({
        status: "fail",
        message: "Sport not found",
      });
    }
    await sport.update(req.body);
    return res.status(200).json({
      status: "success",
      data: {
        sport,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.delete_sport = async (req, res) => {
  try {
    const sport = await db.sport.findByPk(req.params.id);
    if (!sport) {
      return res.status(404).json({
        status: "fail",
        message: "Sport not found",
      });
    }

    await db.epreuve.destroy({sport_id: req.params.id});
    await db.athlete.destroy({sport_id: req.params.id});
    

    await sport.destroy();
    res.redirect('/admin/sports');
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.list_sports = async (req, res) => {
    try {
        const sports = await db.sport.findAll();
        return res.status(200).json({
            list:sports,
        });
    }catch(err){
        return res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}