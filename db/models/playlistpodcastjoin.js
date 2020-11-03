"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class PlaylistPodcastJoin extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			PlaylistPodcastJoin.belongsTo(models.Playlist, {
				foreignKey: "playlistId",
			});
			PlaylistPodcastJoin.belongsTo(models.Podcast, {
				foreignKey: "podcastId",
			});
		}
	}
	PlaylistPodcastJoin.init(
		{
			playlistId: DataTypes.INTEGER,
			podcastId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "PlaylistPodcastJoin",
		}
	);
	return PlaylistPodcastJoin;
};
