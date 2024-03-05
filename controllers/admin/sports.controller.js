const db = require("../../models");
const handleQuery = require("../../utils/handle_query");
const { Op } = require("sequelize");

exports.get_sports = async (req, res) => {
  return handleQuery(db.sport, req, res, {}, {});
};

exports.add_sport = async (req, res) => {
  try {
    const sport = await db.sport.create(req.body);
    return res.status(201).json({
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
    await sport.destroy();
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
