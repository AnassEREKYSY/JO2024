
module.exports = (sequelize, DataTypes) => {
  const Athlete = sequelize.define("athlete", {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    date_naissance: DataTypes.DATE,
    sexe: DataTypes.STRING,
    pays_id: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    sport_id: DataTypes.INTEGER,    
  });

  Athlete.associate = (models) => {
    Athlete.belongsTo(models.sport, {
      foreignKey: "sport_id",
      as: "sport",
      constraints: false,
    });

    Athlete.belongsTo(models.pays, {
      foreignKey: "pays_id",
      as: "pays",
    });

    Athlete.hasMany(models.resultat, {
      foreignKey: "athlete_id",
      as: "resultats",
    });

    Athlete.hasMany(models.epreuve, {
      foreignKey: "athlete_id",
      as: "epreuves",
    });
  }


  return Athlete;
};
