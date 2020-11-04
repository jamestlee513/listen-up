"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Users",
			[
				{
					firstName: "Demo",
					lastName: "Demo",
					email: "demo@demo.com",
					hashedPassword: "$2b$10$4DbN1P6H8x3eoPBSx6/5huQH.zzQmyUrSy66yVHtycFvVMMur4/MK",
					createdAt: new Date(),
					updatedAt: new Date()
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", null, {});
	},
};
