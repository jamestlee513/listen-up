"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Users", [
			{
				firstName: "Demo",
				lastName: "Demo",
				email: "demo@demo.com",
				hashedPassword: "$2b$10$4DbN1P6H8x3eoPBSx6/5huQH.zzQmyUrSy66yVHtycFvVMMur4/MK", //Password is 'secret123'
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				firstName: "James",
				lastName: "Lee",
				email: "jameslee@notgmail.com",
				hashedPassword:
					"$2y$10$ADrVqoRy8WNC/tNu9.5OnOdXDB/oHtq4EI1ceAEwMa1lBsgYm7spu", //Password is 'Password!1',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", null, {});
	},
};
