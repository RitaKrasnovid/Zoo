module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 150],
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 1500],
      },
    },
  }, {});

  News.associate = (models) => {
    News.belongsToMany(models.Images, {
      through: 'NewsImages',
      as: 'image',
      foreignKey: 'newsId',
    });
  };

  return News;
};
