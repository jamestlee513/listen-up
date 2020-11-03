'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Podcast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Podcast.init({
    title: DataTypes.STRING,
    hostName: DataTypes.STRING,
    publisher: DataTypes.STRING,
    podcastImage: DataTypes.STRING,
    description: DataTypes.TEXT,
    episodeCount: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    publishedDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Podcast',
  });
  return Podcast;
};