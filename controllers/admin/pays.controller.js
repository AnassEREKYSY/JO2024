const db = require("../../models");
const handleQuery = require("../../utils/handle_query");
const { Op } = require("sequelize");

exports.get_pays = async (req, res) => {
  return handleQuery(db.pays, req, res, {}, {});
};

exports.add_pays = async (req, res) => {
  try {
    const pays = await db.pays.create(req.body);
    return res.status(201).json({
      status: "success",
      data: {
        pays,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}

exports.get_one_pays = async (req, res) => {
  try {
    const pays = await db.pays.findByPk(req.params.id);
    if (!pays) {
      return res.status(404).json({
        status: "fail",
        message: "Pays not found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: {
        pays,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}

exports.update_pays = async (req, res) => {
  try {
    const pays = await db.pays.findByPk(req.params.id);
    if (!pays) {
      return res.status(404).json({
        status: "fail",
        message: "Pays not found",
      });
    }
    await pays.update(req.body);
    return res.status(200).json({
      status: "success",
      data: {
        pays,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}

exports.delete_pays = async (req, res) => {
  try {
    const pays = await db.pays.findByPk(req.params.id);
    if (!pays) {
      return res.status(404).json({
        status: "fail",
        message: "Pays not found",
      });
    }
    await pays.destroy();
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

exports.list_pays = async (req, res) => {
  try{
    const pays = await db.pays.findAll();
    return res.status(200).json({
      status: "success",
      list: pays
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}
