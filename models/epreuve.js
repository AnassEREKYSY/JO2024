
module.exports = (sequelize, DataTypes) => {
  const Epreuve = sequelize.define("epreuve", {
    sport_id: DataTypes.INTEGER,
    label: DataTypes.STRING,
    date: DataTypes.DATE,
    lieu: DataTypes.STRING,
  });

  Epreuve.associate = (models) => {
    Epreuve.belongsTo(models.sport, {
      foreignKey: "sport_id",
      as: "sport",
    });
    Epreuve.hasMany(models.resultat, {
      foreignKey: "epreuve_id",
      as: "resultats",
    });
  }

  return Epreuve;
};
