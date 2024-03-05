
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


  return Athlete;
};
