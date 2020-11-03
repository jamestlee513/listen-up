"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Podcast extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Podcast.hasMany(models.Link, { foreignKey: "podcastId" });
			Podcast.hasMany(models.PlaylistPodcastJoin, { foreignKey: "podcastId" });
			Podcast.hasMany(models.Review, { foreignKey: "podcastId" });
			Podcast.hasMany(models.Rating, { foreignKey: "podcastId" });
		}
	}
	Podcast.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			hostName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			publisher: {
				type: DataTypes.STRING,
			},
			podcastImage: {
				type: DataTypes.STRING,
			},
			description: {
				type: DataTypes.TEXT,
			},
			episodeCount: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			duration: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			publishedDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Podcast",
		}
	);
	return Podcast;
};
