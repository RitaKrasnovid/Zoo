module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 255],
      },
    },
  }, {});

  Animal.associate = (models) => {
    Animal.belongsToMany(models.Images, {
      through: 'AnimalsImages',
      as: 'images',
      foreignKey: 'animalId',
    });
  };

  return Animal;
};
