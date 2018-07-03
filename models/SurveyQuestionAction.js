/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('SurveyQuestionAction', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    surveyQuestionId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
    },
    digit: {
      type: DataTypes.CHAR(1),
      allowNull: true,
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    answerValue: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    answerAction: {
      type: DataTypes.STRING(55),
      allowNull: true,
    },
    doNotRandomize: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
    },
    s3url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    voiceFileId: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    callTransferValue: {
      type: DataTypes.STRING(55),
      allowNull: true,
    },
    preEditS3Url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    responseText: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'SurveyQuestionAction',
  });
};
