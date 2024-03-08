
module.exports = (sequelize, DataTypes) => {
const Titre = sequelize.define("titre", {
    resultat_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('Or', 'Argent', 'Bronze'),
        allowNull: false
    }
});

Titre.associate = (models) => {
    
}


  return Titre;
};
