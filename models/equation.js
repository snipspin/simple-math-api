'use strict';
module.exports = (sequelize, DataTypes) => {
  const equation = sequelize.define('equation', {
    level: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    question: DataTypes.STRING,
    result: DataTypes.INTEGER
  }, {});
  equation.associate = function(models) {
    // associations can be defined here
  };
  return equation;
};