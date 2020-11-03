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
		PlaylistPodcastJoin.belongsTo(models.Playlist, {
			foreignKey: "playlistId",
		});
		PlaylistPodcastJoin.belongsTo(models.Podcast, {
			foreignKey: "podcastId",
		});
	};
	return PodcastPlaylistJoin;
};
