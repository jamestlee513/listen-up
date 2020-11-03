"use strict";
module.exports = (sequelize, DataTypes) => {
	const Rating = sequelize.define(
		"Rating",
		{
			rating: {
				type: DataTypes.NUMERIC(2, 2),
			},
			podcastId: {
				type: DataTypes.INTEGER,
			},
		},
		{}
	);
	Rating.associate = function (models) {
		Rating.belongsTo(models.User, { foreignKey: "userId" });
		Rating.belongsTo(models.Podcast, { foreignKey: "podcastId" });
	};
	return Rating;
};
