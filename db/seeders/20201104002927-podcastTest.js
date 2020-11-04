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
        { title: 'Dr. Death Season 2: Dr. Fata - King Midas', hostName: 'Wondery', publisher: 'WonderyMedia', podcastImage: 'dr-death-season-2.jpeg', description: 'George Karadsheh, the office manager at Michigan Hematology Oncology, learns several members of staff are quitting. He digs around to find out why they\’re leaving and is alarmed by what he hears.', episodeCount: 4, duration: '32 min', publishedDate: new Date('October 27, 2020'), status: 0 },
        { title: 'The Joe Rogan Experience - JRE MMA Show #98 with Luke Thomas (E)', hostName: 'Joe Rogan', publisher: 'Talking Monkey Productions', podcastImage: 'the-joe-rogan-experience.jpeg', description: 'Joe sits down with combat sports journalist Luke Thomas, who reports on the latest in boxing and mixed martial arts on the CBS Sports programs Morning Kombat, and Morning Kombat: Dissected.', episodeCount: 1731, duration: '3 hr 40 min', publishedDate: new Date('November 3, 2020'), status: 0 },
        { title: 'The Daily - The Sunday Read: \'My Mustache, My Self\'', hostName: 'The Daily', publisher: 'THE NEW YORK TIMES COMPANY', podcastImage: 'the-dailiy.jpeg', description: 'During months of pandemic isolation, Wesley Morris, a critic at large for The New York Times, decided to grow a mustache. The reviews were mixed and predictable.He heard it described as “porny” and “creepy, ” as well as “rugged” and “extra gay.” It was a comment on a group call, however, that gave him pause.Someone noted that his mustache made him look like a lawyer for the N.A.A.C.P.’s legal defense fund. “It was said as a winking correction and an earnest clarification — Y’all, this is what it is, ” Wesley said.“The call moved on, but I didn’t.That is what it is: one of the sweetest, truest things anybody had said about me in a long time.” On today’s episode of The Sunday Read, Wesley Morris’s story about self- identity and the symbolic power of the mustache. This story was written by Wesley Morris and recorded by Audm.To hear more audio stories from publishers like The New York Times, download Audm for iPhone or Android.', episodeCount: null, duration: '38 min', publishedDate: new Date('October 25, 2020'), status: 0 },
        { title: 'Crime Junkie - MURDERED: Shaquita Bennet // Tara Costigan', hostName: 'audiochuck', publisher: null, podcastImage: 'crime-junkie.jpeg', description: 'This week, for Domestic Violence Awareness Month, we\'re bringing you the stories of two women whose lives were stolen by their abusive ex- partners.We are supporting two organizations. The Network, which is a Chicago based advocacy group who has provided training and services to people in the same area where Shaquita lived. We also are supporting the Center for Survivor Agency and Justice in their missions to foster change at all levels and empower communities to better meet the needs of survivors everywhere.', episodeCount: 160, duration: '41 min', publishedDate: new Date('October 5, 2020'), status: 0 },
        { title: 'The Ben Shapiro Show - Shelby Steele | The Ben Shapiro Show Sunday Special Ep. 105', hostName: 'The Daily Wire', publisher: null, podcastImage: 'the-ben-shapiro-show', description: 'Author, columnist, and documentarian Shelby Steele has been a leading scholar on race in the nation for decades. A strong advocate for the civil rights movement of the 1960s, Steele promotes individual liberty and freedom. However, modern racial movements and policies, he says, have done more harm than good for the cause of equality. Increasing dependence on the government has undermined the cause of liberty. Steele, along with his son Eli, have recently released a new documentary, “What Killed Michael Brown?”, an investigation into the 2014 Ferguson, Missouri shooting, just as George Floyd’s death rocked the nation. The film has been labeled as controversial in some unexpected ways. Shelby joined the show today to share the full story, as well as discuss the rise of the Black Lives Matter movement and organization, and the reason President Trump and his supporters are so often labeled as racist.', episodeCount: 350, duration: '1 hr 4 min', publishedDate: new Date('Nov 1, 2020'), status: 0 },
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
