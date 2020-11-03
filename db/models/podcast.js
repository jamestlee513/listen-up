'use strict';
module.exports = (sequelize, DataTypes) => {
  const Podcast = sequelize.define('Podcast', 	{
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
  }, {});
  Podcast.associate = function(models) {
    Podcast.hasMany(models.Link, { foreignKey: "podcastId" });
		Podcast.hasMany(models.PodcastPlaylistJoin, { foreignKey: "podcastId" });
		Podcast.hasMany(models.Review, { foreignKey: "podcastId" });
		Podcast.hasMany(models.Rating, { foreignKey: "podcastId" });
  };
  return Podcast;
};