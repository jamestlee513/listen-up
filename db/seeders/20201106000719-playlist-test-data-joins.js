'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('PlaylistPodcastJoins', [
      //Demo's
      { playlistId: 2, podcastId: 1, createdAt: new Date(), updatedAt: new Date() },
      { playlistId: 2, podcastId: 2, createdAt: new Date(), updatedAt: new Date() },
      { playlistId: 3, podcastId: 3, createdAt: new Date(), updatedAt: new Date() },
      { playlistId: 3, podcastId: 4, createdAt: new Date(), updatedAt: new Date() },
      { playlistId: 4, podcastId: 5, createdAt: new Date(), updatedAt: new Date() },
      //James Lee's
      { playlistId: 5, podcastId: 2, createdAt: new Date(), updatedAt: new Date() },
      { playlistId: 5, podcastId: 4, createdAt: new Date(), updatedAt: new Date() },
      { playlistId: 6, podcastId: 1, createdAt: new Date(), updatedAt: new Date() },
      { playlistId: 7, podcastId: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('PlaylistPodcastJoins', null, {});
  }
};
