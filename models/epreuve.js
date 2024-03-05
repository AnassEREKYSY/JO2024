
module.exports = (sequelize, DataTypes) => {
  const Epreuve = sequelize.define("epreuve", {
    sport_id: DataTypes.INTEGER,
    label: DataTypes.STRING,
    date: DataTypes.DATE,
    lieu: DataTypes.STRING,
  });

  return Epreuve;
};
