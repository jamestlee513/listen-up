"use strict";
module.exports = (sequelize, DataTypes) => {
	const Link = sequelize.define(
		"Link",
		{
			url: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			podcastId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Podcasts" },
			},
			name: {
				type: Sequelize.STRING(30),
				allowNull: false
			}
		},
		{}
	);
	Link.associate = function (models) {
		Link.belongsTo(models.Podcast, { foreignKey: "podcastId" });
	};
	return Link;
};
