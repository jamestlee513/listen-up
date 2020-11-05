'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PlaylistPodcastJoins', [
      { playlistId: 1, podcastId: 1, createdAt: new Date(), updatedAt: new Date() },
      { playlistId: 1, podcastId: 2, createdAt: new Date(), updatedAt: new Date() },
      { playlistId: 1, podcastId: 3, createdAt: new Date(), updatedAt: new Date() },
      { playlistId: 1, podcastId: 4, createdAt: new Date(), updatedAt: new Date() },
      { playlistId: 1, podcastId: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PlaylistPodcastJoins', null, {});
  }
};
