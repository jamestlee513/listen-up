"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Playlist extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Playlist.hasMany(models.PlaylistPodcastJoin, { foreignKey: "playlistId" });
			Playlist.belongsTo(models.User, { foreignKey: "userId" });
		}
	}
	Playlist.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Playlist",
		}
	);
	return Playlist;
};
