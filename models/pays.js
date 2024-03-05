
module.exports = (sequelize, DataTypes) => {
  const Pays = sequelize.define("pays", {
    label: DataTypes.STRING,   
  });

  return Pays;
};
