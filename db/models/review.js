"use strict";
module.exports = (sequelize, DataTypes) => {
	const Review = sequelize.define(
		"Review",
		{
			content: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{}
	);
	Review.associate = function (models) {
		Review.belongsTo(models.User, { foreignKey: "userId" });
		Review.belongsTo(models.Podcast, { foreignKey: "podcastId" });
		Review.hasMany(models.Reply, {
			foreignKey: "reviewId",
			onDelete: "cascade",
			hooks: true,
		});
	};
	return Review;
};
