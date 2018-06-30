module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TextResult', {
		'id': {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		'callerIdTwilioId': {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true
		},
		'number': {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		'to': {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		'from': {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		'direction': {
			type: DataTypes.ENUM('INBOUND','OUTBOUND'),
			allowNull: true
		},
		'sid': {
			type: DataTypes.STRING(55),
			allowNull: true
		},
		'callScheduleId': {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		'message': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'dateCreated': {
			type: DataTypes.DATE,
			allowNull: true
		},
		'cost': {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		'status': {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		'threadId': {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true
		},
		'volunteerUserId': {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true
		},
		'responseStatus': {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		'responseStatusTimestamp': {
			type: DataTypes.DATE,
			allowNull: true
		},
		'errorCode': {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		'errorMessage': {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		'segments': {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		'price': {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		'numMedia': {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		'finalResultsFetched': {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'TextResult'
	});
};
