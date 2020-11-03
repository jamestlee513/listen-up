"use strict";
module.exports = (sequelize, DataTypes) => {
	const PodcastPlaylistJoin = sequelize.define(
		"PodcastPlaylistJoin",
		{
			playlistId: DataTypes.INTEGER,
			podcastId: DataTypes.INTEGER,
		},
		{}
	);
	PodcastPlaylistJoin.associate = function (models) {
		PodcastPlaylistJoin.belongsTo(models.Playlist, {
			foreignKey: "playlistId",
		});
		PodcastPlaylistJoin.belongsTo(models.Podcast, {
			foreignKey: "podcastId",
		});
	};
	return PodcastPlaylistJoin;
};
