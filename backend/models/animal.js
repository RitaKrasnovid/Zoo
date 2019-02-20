module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animals', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    family: {
      type: DataTypes.STRING,
      allowNull: false,
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
