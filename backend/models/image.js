module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Images', {
    title: {
      type: DataTypes.STRING,
      primaryKey: true,
      validate: {
        len: [0, 100],
      },
    },
    data: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  }, {});

  Image.associate = (models) => {
    Image.belongsTo(models.News, {
      foreignKey: 'fk_newsId',
    });
  };

  return Image;
};
