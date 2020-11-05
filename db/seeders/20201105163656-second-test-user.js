'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'James',
        lastName: 'Lee',
        email: 'jameslee@notgmail.com',
        hashedPassword: '$2y$10$ADrVqoRy8WNC/tNu9.5OnOdXDB/oHtq4EI1ceAEwMa1lBsgYm7spu', //Password is 'Password!1',
        createdAt: new Date(),
        updatedAt: new Date()
      } 
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
