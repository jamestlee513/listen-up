"use strict";
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			firstName: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			hashedPassword: {
				type: DataTypes.STRING.BINARY,
				allowNull: false,
				unique: true,
			},
		},
		{}
	);
	User.associate = function (models) {
		User.hasMany(models.Playlist, { foreignKey: "userId" });
		User.hasMany(models.Rating, { foreignKey: "userId" });
		User.hasMany(models.Review, { foreignKey: "userId" });
	};
	return User;
};
