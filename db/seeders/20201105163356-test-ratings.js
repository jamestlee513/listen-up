'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ratings', [
      { rating: 4, userId: 1, podcastId: 1, createdAt: new Date(), updatedAt: new Date() },
      { rating: 3, userId: 1, podcastId: 2, createdAt: new Date(), updatedAt: new Date() },
      { rating: 2, userId: 1, podcastId: 3, createdAt: new Date(), updatedAt: new Date() },
      { rating: 5, userId: 1, podcastId: 4, createdAt: new Date(), updatedAt: new Date() },
      { rating: 4, userId: 1, podcastId: 5, createdAt: new Date(), updatedAt: new Date() },
      { rating: 4, userId: 1, podcastId: 6, createdAt: new Date(), updatedAt: new Date() },
      { rating: 3, userId: 1, podcastId: 7, createdAt: new Date(), updatedAt: new Date() },
      { rating: 2, userId: 1, podcastId: 8, createdAt: new Date(), updatedAt: new Date() },
      { rating: 5, userId: 1, podcastId: 9, createdAt: new Date(), updatedAt: new Date() },
      { rating: 4, userId: 1, podcastId: 10, createdAt: new Date(), updatedAt: new Date() },
      { rating: 4, userId: 1, podcastId: 11, createdAt: new Date(), updatedAt: new Date() },
      { rating: 3, userId: 1, podcastId: 12, createdAt: new Date(), updatedAt: new Date() },
      { rating: 2, userId: 1, podcastId: 13, createdAt: new Date(), updatedAt: new Date() },
      { rating: 5, userId: 1, podcastId: 14, createdAt: new Date(), updatedAt: new Date() },
      { rating: 4, userId: 1, podcastId: 15, createdAt: new Date(), updatedAt: new Date() },
      { rating: 4, userId: 1, podcastId: 16, createdAt: new Date(), updatedAt: new Date() },
      { rating: 3, userId: 1, podcastId: 17, createdAt: new Date(), updatedAt: new Date() },
      { rating: 2, userId: 1, podcastId: 18, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ratings', null, {});
  }
};
