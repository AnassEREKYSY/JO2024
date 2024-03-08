
module.exports = (sequelize, DataTypes) => {
  const Sport = sequelize.define("sport", {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  Sport.associate = (models) => {
    Sport.hasMany(models.epreuve, {
      foreignKey: "sport_id",
      as: "epreuves",
      constraints: false,
    });
    Sport.hasMany(models.athlete, {
      foreignKey: "sport_id",
      as: "athletes",
      constraints: false,
    });
  }

  return Sport;
};
