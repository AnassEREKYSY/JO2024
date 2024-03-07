const db = require("../../models");
const handleQuery = require("../../utils/handle_query");
const { Op } = require("sequelize");

exports.get_titres = async (req, res) => {
  return handleQuery(db.titre, req, res, {}, {});
};

exports.add_titre = async (req, res) => {
  try {

    const titre_exist = await db.titre.findOne({
      where: {
        resultat_id: req.body.resultat_id,
      },
    });

    if (titre_exist) {
      return res.status(400).json({
        status: "fail",
        message: "Il existe déjà un titre pour ce résultat",
      });
    }

    const titre = await db.titre.create(req.body);
    return res.status(201).json({
      status: "success",
      data: {
        titre,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.add_titre_view = async (req, res) => {
  try {
    const resultats = await db.resultat.findAll({
      include: [
        { model: db.athlete, as: "athlete" },
        { model: db.epreuve, as: "epreuve",
          include: [
            { model: db.sport, as: "sport" },
          ],
       },
      ],
    })
    res.render("templates/titre/addEditTitre", {
      resultats: resultats,
    });

  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.get_titre = async (req, res) => {
  try {
    const titre = await db.titre.findByPk(req.params.id);
    if (!titre) {
      return res.status(404).json({
        status: "fail",
        message: "Titre not found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: {
        titre,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.update_titre = async (req, res) => {
  try {
    const titre = await db.titre.findByPk(req.params.id);
    if (!titre) {
      return res.status(404).json({
        status: "fail",
        message: "Titre not found",
      });
    }
    await titre.update(req.body);
    return res.status(200).json({
      status: "success",
      data: {
        titre,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.delete_titre = async (req, res) => {
  try {
    const titre = await db.titre.findByPk(req.params.id);
    if (!titre) {
      return res.status(404).json({
        status: "fail",
        message: "Titre not found",
      });
    }
    await titre.destroy();
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

exports.list_titres = async (req, res) => {
    try {
        const titres = await db.titre.findAll();
        return res.status(200).json({
            list: titres,
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}
