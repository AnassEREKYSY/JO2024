
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

  Resultat.associate = (models) => {
    Resultat.belongsTo(models.athlete, {
      foreignKey: "athlete_id",
      as: "athlete",
      constraints: false,
    });
    Resultat.belongsTo(models.epreuve, {
      foreignKey: "epreuve_id",
      as: "epreuve",
      constraints: false,
    });
    Resultat.hasOne(models.titre, {
      foreignKey: "resultat_id",
      as: "titre",
      constraints: false,
    });
  }

  return Resultat;
};
