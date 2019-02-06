module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Images', {
    title: {
      type: DataTypes.STRING,
      primaryKey: true,
      validate: {
        len: [0, 255],
      },
    },
    data: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  }, {});

  Image.associate = (models) => {
    // Image.belongTo(models.News, {
    //   as: 'news',
    //   onDelete: 'CASCADE',
    // });
  };

  return Image;
};
