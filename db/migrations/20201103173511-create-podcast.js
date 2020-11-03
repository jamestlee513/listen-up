"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Podcasts", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			hostName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			publisher: {
				type: Sequelize.STRING,
			},
			podcastImage: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.TEXT,
			},
			episodeCount: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			duration: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			publishedDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			status: {
				type: Sequelize.INTEGER,
				references: { model: "Playlists" },
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Podcasts");
	},
};
