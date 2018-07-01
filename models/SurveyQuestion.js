/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('SurveyQuestion', {
		'id': {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		'idForSurvey': {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true
		},
		'callId': {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true
		},
		'name': {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		'recordingS3': {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		'recordingMp3S3': {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		'preEditS3Url': {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		'defaultAction': {
			type: DataTypes.STRING(55),
			allowNull: true
		},
		'defaultActionValue': {
			type: DataTypes.STRING(55),
			allowNull: true
		},
		'noAnswerReceivedAction': {
			type: DataTypes.STRING(55),
			allowNull: true
		},
		'noAnswerReceivedValue': {
			type: DataTypes.STRING(55),
			allowNull: true
		},
		'noAnswerReceivedActionImmediately': {
			type: DataTypes.STRING(55),
			allowNull: true
		},
		'speechEnabled': {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true
		},
		'singleDigit': {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: true,
			defaultValue: '1'
		},
		'multipleDigitQuestion': {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		'parentQuestionId': {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true
		},
		'digits': {
			type: DataTypes.INTEGER(2).UNSIGNED,
			allowNull: true,
			defaultValue: '1'
		},
		'voiceFileId': {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		'lowerLimit': {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		'upperLimit': {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		'isMandatory': {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		'isDeleted': {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		'isNewMultipleDigitFormat': {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		'repeatCount': {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '1'
		},
		'nameLong': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'defaultResponseText': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'isStatement': {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		'isFeedback': {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'SurveyQuestion'
	});
};
