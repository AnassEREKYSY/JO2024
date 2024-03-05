
module.exports = (sequelize, DataTypes) => {
  const Sport = sequelize.define("sport", {
    name: DataTypes.STRING,
  });
  return Sport;
};
