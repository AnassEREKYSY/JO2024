const db = require("../../models");
const handleQuery = require("../../utils/handle_query");

exports.get_sports = async (req, res) => {
  const sports = await db.sport.findAll();
  res.render("templates/public/sports", {
    sports: sports,
    active: "sports"
  });
};

exports.get_sport = async (req, res) => {
  try {
    const sport = await db.sport.findOne({ where: { id: req.params.id } ,
    include: [
      {
        model: db.athlete,
        as: "athletes",
        attributes: ["id", "nom", "prenom", "photo"],
        include: [
          {
            model: db.resultat,
            as: "resultats",
            include: [
              {
                model: db.titre,
                as: "titre",
                required: true,
              }
            ]
          },
        ]
      },
    ]
    });

    const epreuves = await db.epreuve.findAll({ where: { sport_id: req.params.id } });

    sport.epreuves = epreuves;

    return res.render("templates/public/sport", {
      sport: sport,
      active: "sports"
    });


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
    const pays = await db.pays.findAll({
      include: [
        {
          model: db.athlete,
          as: "athletes",
          attributes: ["id"],
          include: [
            {
              model: db.resultat,
              as: "resultats",
              include: [
                {
                  model: db.titre,
                  as: "titre",
                  required: true,
                }
              ]
            }
          ]
         
        }
      ]
    });
    

    return res.render("templates/public/pays", {
      pays: pays,
      active: "pays"
    })
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.get_athletes = async (req, res) => {
  try{
    const athletes = await db.athlete.findAll({
      include:[
        {
          model: db.sport,
          as: "sport",
          attributes: ["name"]
        },
        {
          model: db.pays,
          as: "pays",
          attributes: ["label"]
        }
      ]
    });
    
    return res.render("templates/public/athletes", {
      athletes: athletes,
      active: "athletes"
    });
  }catch(err){
    res.status(500).json(err);
  }
};

exports.get_athlete = async (req, res) => {
  try {
    const athlete = await db.athlete.findOne({ where: { id: req.params.id } ,
      include:[
        {
          model: db.sport,
          as: "sport",
          attributes: ["nom"]
        },
        {
          model: db.pays,
          as: "pays",
          attributes: ["label"]
        }
      ]
    });
    
    return res.render("templates/public/athlete", {
      athlete: athlete,
      active: "athletes"
    });

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
};

exports.list_titre = async (req, res) => {
  try {
    const titres = await db.titre.findAll();
    res.status(200).json(titres);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.get_titre = async (req, res) => {
  try {
    const titre = await db.titre.findOne({ where: { id: req.params.id } });
    res.status(200).json(titre);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.login = async (req, res) => {
  try {
    return res.render("templates/admin/login");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.forgot_password = async (req, res) => {
  try {
    return res.render("templates/admin/forgot-password");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.reset_password = async (req, res) => {
  try {
    return res.render("templates/admin/reset-password", {
      email: req.query.email,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
