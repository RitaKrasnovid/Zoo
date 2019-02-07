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
  }, {});

  News.associate = (models) => {
    News.hasMany(models.Images, {
      as: 'images',
      foreignKey: 'fk_newsId',
    });
  };

  return News;
};
