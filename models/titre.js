
module.exports = (sequelize, DataTypes) => {
const Titre = sequelize.define("titre", {
    resultat_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('Or', 'Argent', 'Bronze'),
        allowNull: false
    }
});


  return Titre;
};
