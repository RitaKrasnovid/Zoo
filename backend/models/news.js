module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 255],
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_id: {
      type: DataTypes.ENUM(DataTypes.INTEGER),
    },
  }, {});

  News.associate = (models) => {
    News.hasMany(models.Image, {
      as: 'image',
      foreignKey: {
        field: 'image_id',
      },
    });
  };

  return News;
};
