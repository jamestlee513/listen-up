"use strict";
module.exports = (sequelize, DataTypes) => {
	const Reply = sequelize.define(
		"Reply",
		{
			content: {
				type: DataTypes.TEXT,
			},
		},
		{}
	);
	Reply.associate = function (models) {
		Reply.belongsTo(models.User, { foreignKey: "userId" });
		Reply.belongsTo(models.Review, { foreignKey: "reviewId" });
	};
	return Reply;
};
