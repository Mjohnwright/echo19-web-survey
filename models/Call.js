/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Call', {
		'id': {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		'shoutpointId': {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '0'
		},
		'clientId': {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		'callerId': {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		'userId': {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		'name': {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		'type': {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		'useDisclaimer': {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		'localStartTime': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'localEndTime': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'pressThroughDigit': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'repeatMsgDigit': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'confirmMsgDigit': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'disconnectDigit': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'dncDigit': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'playAMEarlyDelay': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'playLVEarlyDelay': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'alternativeCallerId': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'aniPrivacy': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'aniDelivery': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'agentPhoneNo': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'agentStartTime': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'agentEndTime': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'agentTZ': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'agentImmediateTransfer': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'agentImmediateTransferDelay': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'agentSurvey': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'callTransferType': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'dupPolicy': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'dncScrubNational': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'dncScrubCustomer': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'recordTrx': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'wirelessScrub': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'mediaDetection': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'inbound': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxAM': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxLV': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxOption0': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxOption1': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxOption2': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxOption3': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxOption4': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxOption5': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxOption6': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxOption7': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxOption8': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxOption9': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxOptionOther': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'voxBye': {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		'dateCreated': {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		'isActive': {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '1'
		},
		'isDeleted': {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		'isABTest': {
			type: DataTypes.INTEGER(1).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		'intro': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'endMessage': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'goal': {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'Call'
	});
};
