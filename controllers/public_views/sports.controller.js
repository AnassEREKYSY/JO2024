const db = require("../../models");
const handleQuery = require("../../utils/handle_query");
const { Op } = require("sequelize");

exports.get_sports = async (req, res) => {
  return handleQuery(db.sport, req, res, {}, {});
};