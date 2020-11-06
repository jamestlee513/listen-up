'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Links', [
      { podcastId: 1, url: 'https://open.spotify.com/show/11otyPZRnEuApDmKx36smA', name: 'Spotify' },
      { podcastId: 1, url: 'https://podcasts.apple.com/us/podcast/king-midas/id1534642943?i=1000496214700', name: 'Apple Podcasts' },
      { podcastId: 2, url: 'https://open.spotify.com/episode/7mc7jP2nCCPqjKUZrtCgrO', name: 'Spotify' },
      { podcastId: 2, url: 'https://podcasts.apple.com/us/podcast/jre-mma-show-98-with-luke-thomas/id360084272?i=1000497090502', name: 'Apple Podcasts' },
      { podcastId: 3, url: 'https://open.spotify.com/episode/6cbZsU9BXc0pJNpxD0L564?si=A1olwycvSb-o1Pzb5ARBcg', name: 'Spotify' },
      { podcastId: 3, url: 'https://podcasts.apple.com/us/podcast/the-sunday-read-my-mustache-my-self/id1200361736', name: 'Apple Podcasts' },
      { podcastId: 4, url: 'https://open.spotify.com/episode/1abAb3gRjbmlDP2EypW8pn?si=e-ycQEtyQR6KQPeLvKfKTQ', name: 'Spotify' },
      { podcastId: 4, url: 'https://podcasts.apple.com/us/podcast/murdered-shaquita-bennett-tara-costigan/id1322200189?i=1000493615882', name: 'Apple Podcasts' },
      { podcastId: 5, url: 'https://open.spotify.com/episode/6VDOd1Ncq5ReU5gnN9afoO?si=fAW6iycTQH2R76aatcawPw', name: 'Spotify' },
      { podcastId: 5, url: 'https://podcasts.apple.com/us/podcast/shelby-steele-the-ben-shapiro-show-sunday-special-ep-105/id1047335260?i=1000496822706', name: 'Apple Podcasts' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Links', null, {});
  }
};
