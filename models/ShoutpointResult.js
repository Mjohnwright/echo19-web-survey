/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ShoutpointResult', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    shoutpointId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
    },
    callId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
    },
    callScheduleId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    number: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    phoneNumberId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    result: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    duration: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    agentConnectTimeSeconds: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    userData: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    volunteerUserId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0',
    },
  }, {
    tableName: 'ShoutpointResult',
  });
};
