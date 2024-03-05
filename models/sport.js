
module.exports = (sequelize, DataTypes) => {
  const Sport = sequelize.define("sport", {
    name: DataTypes.STRING,
  });

  Sport.associate = (models) => {
    Sport.hasMany(models.epreuve, {
      foreignKey: "sport_id",
      as: "epreuves",
    });
  }

  return Sport;
};
