module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {
    title: DataTypes.STRING,
  }, {});

  Animal.associate = (models) => {
    // associations can be defined here
  };

  return Animal;
};
