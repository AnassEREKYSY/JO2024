
module.exports = (sequelize, DataTypes) => {
  const Pays = sequelize.define("pays", {
    label: DataTypes.STRING,  
    flag: DataTypes.STRING, 
  });

  Pays.associate = (models) => {
    Pays.hasMany(models.athlete, {
      foreignKey: "pays_id",
      as: "athletes",
      constraints: false,
    });
  }

  return Pays;
};
