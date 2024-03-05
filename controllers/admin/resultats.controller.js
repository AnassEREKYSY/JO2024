const db = require("../../models");
const handleQuery = require("../../utils/handle_query");
const { Op } = require("sequelize");

exports.get_resultats = async (req, res) => {
  return handleQuery(db.resultat, req, res, {}, {});
};

exports.add_resultat = async (req, res) => {
  try {
    const resultat = await db.resultat.create(req.body);
    return res.status(201).json({
      status: "success",
      data: {
        resultat,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.get_resultat = async (req, res) => {
  try {
    const resultat = await db.resultat.findByPk(req.params.id);
    if (!resultat) {
      return res.status(404).json({
        status: "fail",
        message: "Resultat not found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: {
        resultat,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.update_resultat = async (req, res) => {
  try {
    const resultat = await db.resultat.findByPk(req.params.id);
    if (!resultat) {
      return res.status(404).json({
        status: "fail",
        message: "Resultat not found",
      });
    }
    await resultat.update(req.body);
    return res.status(200).json({
      status: "success",
      data: {
        resultat,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.delete_resultat = async (req, res) => {
  try {
    const resultat = await db.resultat.findByPk(req.params.id);
    if (!resultat) {
      return res.status(404).json({
        status: "fail",
        message: "Resultat not found",
      });
    }
    await resultat.destroy();
    return res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.list_resultats = async (req, res) => {
    try {
        const resultats = await db.resultat.findAll();
        return res.status(200).json({
            list: resultats,
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};
