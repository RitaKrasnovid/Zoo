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
    News.belongsToMany(models.Images, {
      through: 'NewsImages',
      as: 'images',
      foreignKey: 'newsId',
    });
  };

  return News;
};
