'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Replies', [
      { content: 'Vivamus malesuada arcu magna, a sodales arcu sagittis sit amet. Morbi eget dapibus est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc interdum commodo erat id pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc id aliquam lectus. Donec vitae massa vulputate, interdum orci vel, auctor lorem. Cras et mi sed risus gravida ultricies.', reviewId: 1, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { content: 'Vivamus malesuada arcu magna, a sodales arcu sagittis sit amet. Morbi eget dapibus est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc interdum commodo erat id pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc id aliquam lectus. Donec vitae massa vulputate, interdum orci vel, auctor lorem. Cras et mi sed risus gravida ultricies.', reviewId: 2, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { content: 'Vivamus malesuada arcu magna, a sodales arcu sagittis sit amet. Morbi eget dapibus est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc interdum commodo erat id pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc id aliquam lectus. Donec vitae massa vulputate, interdum orci vel, auctor lorem. Cras et mi sed risus gravida ultricies.', reviewId: 3, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { content: 'Vivamus malesuada arcu magna, a sodales arcu sagittis sit amet. Morbi eget dapibus est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc interdum commodo erat id pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc id aliquam lectus. Donec vitae massa vulputate, interdum orci vel, auctor lorem. Cras et mi sed risus gravida ultricies.', reviewId: 4, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { content: 'Vivamus malesuada arcu magna, a sodales arcu sagittis sit amet. Morbi eget dapibus est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc interdum commodo erat id pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc id aliquam lectus. Donec vitae massa vulputate, interdum orci vel, auctor lorem. Cras et mi sed risus gravida ultricies.', reviewId: 5, userId: 2, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Replies', null, {});
  }
};
