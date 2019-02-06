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
    Animal.belongsTo(models.Image, {
      foreignKey: 'fk_image',
    });
  };

  return Animal;
};
