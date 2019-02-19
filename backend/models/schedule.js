module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 500],
      },
    },
  }, {});

  Schedule.associate = function (models) {
    // associations can be defined here
  };

  return Schedule;
};
