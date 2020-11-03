"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Rating extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Rating.belongsTo(models.User, { foreignKey: "userId" });
			Rating.belongsTo(models.Podcast, { foreignKey: "podcastId" });
		}
	}
	Rating.init(
		{
			rating: {
				type: DataTypes.NUMERIC(1, 2),
			},
			podcastId: {
				type: DataTypes.INTEGER,
			},
		},
		{
			sequelize,
			modelName: "Rating",
		}
	);
	return Rating;
};
