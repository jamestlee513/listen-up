'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Podcasts',
      [
        {
          title: 'Dr. Death Season 2: Dr. Fata - King Midas', hostName: 'True Crime', publisher: 'WonderyMedia', podcastimage: , description: 'George Karadsheh, the office manager at Michigan Hematology Oncology, learns several members of staff are quitting. He digs around to find out why they\’re leaving and is alarmed by what he hears.', episodeCount: 3, duration: '32 min', publishedDate: new Date('October 27, 2020') , status:, }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Podcasts', null, {});
  }
};
