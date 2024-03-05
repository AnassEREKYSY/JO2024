const db = require("../../models");
const handleQuery = require("../../utils/handle_query");
const { Op } = require("sequelize");

exports.get_athletes = async (req, res) => {
  return handleQuery(db.athlete, req, res, {}, {});
};

exports.add_athlete = async (req, res) => {
  try {
    const athlete = await db.athlete.create(req.body);
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
