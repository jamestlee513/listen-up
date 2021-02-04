'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Links', [
      { podcastId: 1, url: 'https://open.spotify.com/show/11otyPZRnEuApDmKx36smA', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 1, url: 'https://podcasts.apple.com/us/podcast/king-midas/id1534642943?i=1000496214700', name: 'Apple Podcasts', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 2, url: 'https://open.spotify.com/episode/6cbZsU9BXc0pJNpxD0L564?si=A1olwycvSb-o1Pzb5ARBcg', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 2, url: 'https://podcasts.apple.com/us/podcast/the-sunday-read-my-mustache-my-self/id1200361736', name: 'Apple Podcasts', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 3, url: 'https://open.spotify.com/episode/1abAb3gRjbmlDP2EypW8pn?si=e-ycQEtyQR6KQPeLvKfKTQ', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 3, url: 'https://podcasts.apple.com/us/podcast/murdered-shaquita-bennett-tara-costigan/id1322200189?i=1000493615882', name: 'Apple Podcasts', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 4, url: 'https://open.spotify.com/episode/5Jm704nNGNEnypexuoe16o', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 4, url: 'https://podcasts.apple.com/us/podcast/brains-on-science-podcast-for-kids/id703720228', name: 'Apple Podcasts', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 5, url: 'https://open.spotify.com/episode/2zxewGsIQqgeF9GJBlQ4w5?si=05caVQALQw2Cx0r-_75SDw', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 5, url: 'https://podcasts.apple.com/us/podcast/brains-on-science-podcast-for-kids/id703720228', name: 'Apple Podcasts', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 6, url: 'https://open.spotify.com/episode/2ojxnu4RsikiL84MYXDCCy?si=wL-gkLihTsmf6FWhBJ84Og', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 6, url: 'https://podcasts.apple.com/us/podcast/brains-on-science-podcast-for-kids/id703720228', name: 'Apple Podcasts', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 7, url: 'https://open.spotify.com/episode/5IUWvWqX6InxoDBF0KGt1F?si=OnBKuZMqSsGl-6tsXzg5sQ', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 8, url: 'https://open.spotify.com/episode/6wSRHhygu8zbfDiJuGVwXC?si=7smiVjcSQmufhbOempBNFw', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 8, url: 'https://podcasts.apple.com/us/podcast/brains-on-science-podcast-for-kids/id703720228', name: 'Apple Podcasts', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 9, url: 'https://open.spotify.com/episode/3chaPbOJ62zrox3oVpRby6', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 10, url: 'https://open.spotify.com/episode/5uW0hInzp87EBC4nSUMCo7', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 11, url: 'https://open.spotify.com/episode/5ku9lGAAElNA6VxbD4vJK1', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 12, url: 'https://open.spotify.com/episode/4SXUEObcJmmT6MTk0HgRjc', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 13, url: 'https://open.spotify.com/episode/3moCAg5sETitIwOZuJVaol', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 14, url: 'https://open.spotify.com/episode/039ApIRzUVmVaqkh1rVa9b?si=YGgWdGmjTvyEJR8W9s3idg', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 14, url: 'https://podcasts.apple.com/us/podcast/move-more-but-for-the-right-reasons/id1474245040?i=1000506447212', name: 'Apple Podcasts', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 15, url: 'https://podcasts.apple.com/us/podcast/ifb185-when-to-stop-dripping-reit-and-dca-questions/id1210741497?i=1000506850638', name: 'Apple Podcasts', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 15, url: 'https://open.spotify.com/episode/18zp7qhTCJfeiq5VXImEgK?si=1a2cy7CgT1Oc1RUmdHZiOg', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 16, url: 'https://podcasts.apple.com/us/podcast/david-duchovny-when-student-is-ready-master-may-be/id1472106563?i=1000506735004', name: 'Apple Podcasts', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 16, url: 'https://open.spotify.com/episode/7vgQENFVnfxwqDUYLbVQ8l?si=Z_yHU5qVTkyBA2EgU-nFpQ', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 17, url: 'https://podcasts.apple.com/us/podcast/double-masking-n95s-and-the-latest-mask-guidance/id1501029683?i=1000507272002', name: 'Apple Podcasts', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 17, url: 'https://open.spotify.com/episode/2HLrFuTsxRTSMs641xQ638?si=GXT5SicmROmgV5IJ8Cnaig', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 18, url: 'https://podcasts.apple.com/us/podcast/study-hall-the-top-college-hacks-with-professor-lenny-jeff/id1450211392?i=1000506229442', name: 'Apple Podcasts', createdAt: new Date(), updatedAt: new Date() },
      { podcastId: 18, url: 'https://open.spotify.com/episode/55TY0MBu8nNxCokWwfjMCb?si=GUOgxUQaS6KQqE-sJHYFPQ', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
      // { podcastId: , url: '', name: 'Apple Podcasts', createdAt: new Date(), updatedAt: new Date() },
      // { podcastId: , url: '', name: 'Spotify', createdAt: new Date(), updatedAt: new Date() },
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
