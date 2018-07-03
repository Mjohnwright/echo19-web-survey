/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ShoutpointQuestionResult', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    phoneNumberId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
    },
    callScheduleId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
    },
    surveyQuestionId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
    },
    surveyQuestionActionId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
    },
    answerValue: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    actualDigit: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true,
    },
    volunteerUserId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0',
    },
  }, {
    tableName: 'ShoutpointQuestionResult',
  });
};
