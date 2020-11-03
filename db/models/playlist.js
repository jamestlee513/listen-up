"use strict";
module.exports = (sequelize, DataTypes) => {
	const Playlist = sequelize.define(
		"Playlist",
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{}
	);
	Playlist.associate = function (models) {
		Playlist.hasMany(models.PodcastPlaylistJoin, {
			foreignKey: "playlistId",
		});
		Playlist.belongsTo(models.User, { foreignKey: "userId" });
	};
	return Playlist;
};
