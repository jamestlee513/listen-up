"use strict";
module.exports = (sequelize, DataTypes) => {
	const PlaylistPodcastJoin = sequelize.define(
		"PlaylistPodcastJoin",
		{
			playlistId: DataTypes.INTEGER,
			podcastId: DataTypes.INTEGER,
		},
		{}
	);
	PlaylistPodcastJoin.associate = function (models) {
		PlaylistPodcastJoin.belongsTo(models.Playlist, {
			foreignKey: "playlistId",
		});
		PlaylistPodcastJoin.belongsTo(models.Podcast, {
			foreignKey: "podcastId",
		});
	};
	return PlaylistPodcastJoin;
};
