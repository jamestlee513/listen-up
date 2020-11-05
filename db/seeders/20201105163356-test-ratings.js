'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ratings', [
      { rating: 4, userId: 1, podcastId: 1, createdAt: new Date(), updatedAt: new Date() },
      { rating: 3, userId: 1, podcastId: 2, createdAt: new Date(), updatedAt: new Date() },
      { rating: 2, userId: 1, podcastId: 3, createdAt: new Date(), updatedAt: new Date() },
      { rating: 5, userId: 1, podcastId: 4, createdAt: new Date(), updatedAt: new Date() },
      { rating: 4, userId: 1, podcastId: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ratings', null, {});
  }
};
