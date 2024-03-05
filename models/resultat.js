
module.exports = (sequelize, DataTypes) => {
  const Resultat = sequelize.define("resultat", {
    athlete_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    epreuve_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    performance: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });


  return Resultat;
};
