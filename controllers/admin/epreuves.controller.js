const db = require("../../models");
const handleQuery = require("../../utils/handle_query");

exports.get_epreuves = async (req, res) => {
  return handleQuery(db.epreuve, req, res, {
    include: [
      {
        model: db.sport,
        as: "sport",
      },
    ],
  }, {});
};
exports.get_epreuves_view = async (req, res) => {
  try{
    const epreuves = await db.epreuve.findAll({ include: [
      { model: db.sport, as: "sport" },
      
    ] });
    res.render("templates/epreuve/epreuves", {
      epreuves: epreuves,
      active: "epreuves"
    });
  }catch(error){
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.add_epreuve = async (req, res) => {
  try {
    const epreuve = await db.epreuve.create(req.body);
    return res.status(201).json({
      status: "success",
      data: {
        epreuve,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.add_epreuve_view = async (req, res) => {
  try {
    
    const sports = await db.sport.findAll();
    const athletes = await db.athlete.findAll();

    res.render("templates/epreuve/addEditEpreuve", {
      sports: sports,
      athletes: athletes
    });

  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.get_epreuve = async (req, res) => {
    try {
        const epreuve = await db.epreuve.findOne({ where: { id: req.params.id }, include: [{ model: db.sport, as: "sport" }] });
        if (!epreuve) {
        return res.status(404).json({
            status: "fail",
            message: "Epreuve not found",
        });
        }
        return res.status(200).json({
        status: "success",
        data: {
            epreuve,
        },
        });
    } catch (err) {
        return res.status(400).json({
        status: "fail",
        message: err,
        });
    }
};

exports.update_epreuve = async (req, res) => {
    try {
        const epreuve = await db.epreuve.findByPk(req.params.id);
        if (!epreuve) {
        return res.status(404).json({
            status: "fail",
            message: "Epreuve not found",
        });
        }
        await epreuve.update(req.body);
        return res.status(200).json({
        status: "success",
        data: {
            epreuve,
        },
        });
    } catch (err) {
        return res.status(400).json({
        status: "fail",
        message: err,
        });
    }
};

exports.delete_epreuve = async (req, res) => {
    try {
        const epreuve = await db.epreuve.findByPk(req.params.id);
        if (!epreuve) {
        return res.status(404).json({
            status: "fail",
            message: "Epreuve not found",
        });
        }
        await epreuve.destroy();
        return res.redirect("/admin/epreuves");
    } catch (err) {
        return res.status(400).json({
        status: "fail",
        message: err,
        });
    }
}

exports.list_epreuves = async (req, res) => {
    try {
        const epreuves = await db.epreuve.findAll({ include: [{ model: db.sport, as: "sport" }] });
        return res.status(200).json({
        status: "success",
        data: {
            epreuves,
        },
        });
    } catch (err) {
        return res.status(400).json({
        status: "fail",
        message: err,
        });
    }
}

    


