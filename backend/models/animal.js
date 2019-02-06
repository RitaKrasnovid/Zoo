module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 255],
      },
    },
    image_id: {
      type: DataTypes.INTEGER,
    },
  }, {});

  Animal.associate = (models) => {
    Animal.belongsToMany(models.Images, {
      through: 'NewsImages',
      as: 'images',
      foreignKey: 'animalId',
    });
  };

  return Animal;
};
