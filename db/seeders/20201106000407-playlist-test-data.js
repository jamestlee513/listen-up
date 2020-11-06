'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Playlists', [
      { title: 'Currently Listening', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Want to listen', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Listened', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Currently Listening', userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Want to listen', userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Listened', userId: 2, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Playlists', null, {});
  }
};
