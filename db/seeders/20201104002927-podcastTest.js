"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Podcasts",
            [
                {
                    title: "Dr. Death Season 2: Dr. Fata - King Midas",
                    hostName: "Wondery",
                    publisher: "WonderyMedia",
                    podcastImage: "/imgs/dr-death-season-2.jpeg",
                    description:
                        "George Karadsheh, the office manager at Michigan Hematology Oncology, learns several members of staff are quitting. He digs around to find out why they’re leaving and is alarmed by what he hears.",
                    episodeCount: 4,
                    duration: 32,
                    publishedDate: new Date("October 27, 2020"),
                    status: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title:
                        "The Joe Rogan Experience - JRE MMA Show #98 with Luke Thomas (E)",
                    hostName: "Joe Rogan",
                    publisher: "Talking Monkey Productions",
                    podcastImage: "/imgs/the-joe-rogan-experience.jpg",
                    description:
                        "Joe sits down with combat sports journalist Luke Thomas, who reports on the latest in boxing and mixed martial arts on the CBS Sports programs Morning Kombat, and Morning Kombat: Dissected.",
                    episodeCount: 1731,
                    duration: 220,
                    publishedDate: new Date("November 3, 2020"),
                    status: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title:
                        "The Daily - The Sunday Read: 'My Mustache, My Self'",
                    hostName: "The Daily",
                    publisher: "THE NEW YORK TIMES COMPANY",
                    podcastImage: "/imgs/the-daily.jpeg",
                    description:
                        "During months of pandemic isolation, Wesley Morris, a critic at large for The New York Times, decided to grow a mustache. The reviews were mixed and predictable.He heard it described as “porny” and “creepy, ” as well as “rugged” and “extra gay.” It was a comment on a group call, however, that gave him pause.Someone noted that his mustache made him look like a lawyer for the N.A.A.C.P.’s legal defense fund. “It was said as a winking correction and an earnest clarification — Y’all, this is what it is, ” Wesley said.“The call moved on, but I didn’t.That is what it is: one of the sweetest, truest things anybody had said about me in a long time.” On today’s episode of The Sunday Read, Wesley Morris’s story about self- identity and the symbolic power of the mustache.",
                    episodeCount: 1007,
                    duration: 38,
                    publishedDate: new Date("October 25, 2020"),
                    status: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title:
                        "Crime Junkie - MURDERED: Shaquita Bennet // Tara Costigan",
                    hostName: "audiochuck",
                    publisher: null,
                    podcastImage: "/imgs/crime-junkie.jpeg",
                    description:
                        "This week, for Domestic Violence Awareness Month, we're bringing you the stories of two women whose lives were stolen by their abusive ex- partners.We are supporting two organizations. The Network, which is a Chicago based advocacy group who has provided training and services to people in the same area where Shaquita lived. We also are supporting the Center for Survivor Agency and Justice in their missions to foster change at all levels and empower communities to better meet the needs of survivors everywhere.",
                    episodeCount: 160,
                    duration: 41,
                    publishedDate: new Date("October 5, 2020"),
                    status: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title:
                        "The Ben Shapiro Show - Shelby Steele | The Ben Shapiro Show Sunday Special Ep. 105",
                    hostName: "The Daily Wire",
                    publisher: null,
                    podcastImage: "/imgs/the-ben-shapiro-show.jpg",
                    description:
                        "Author, columnist, and documentarian Shelby Steele has been a leading scholar on race in the nation for decades. A strong advocate for the civil rights movement of the 1960s, Steele promotes individual liberty and freedom. However, modern racial movements and policies, he says, have done more harm than good for the cause of equality. Increasing dependence on the government has undermined the cause of liberty. Steele, along with his son Eli, have recently released a new documentary, “What Killed Michael Brown?”, an investigation into the 2014 Ferguson, Missouri shooting, just as George Floyd’s death rocked the nation. The film has been labeled as controversial in some unexpected ways. Shelby joined the show today to share the full story, as well as discuss the rise of the Black Lives Matter movement and organization, and the reason President Trump and his supporters are so often labeled as racist.",
                    episodeCount: 350,
                    duration: 64,
                    publishedDate: new Date("Nov 1, 2020"),
                    status: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                //extra 10
                {
                    title: "Eating",
                    hostName: "Brains ON",
                    publisher: null,
                    podcastImage: "/imgs/brainsOn.jpg",
                    description:
                        "Why do some foods taste better to adults than kids and what happens to food once you are done tasting it?",
                    episodeCount: 1,
                    duration: 21,
                    publishedDate: new Date("Jul 1, 2013"),
                    status: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Growing",
                    hostName: "Brains ON",
                    publisher: null,
                    podcastImage: "/imgs/brainsOn.jpg",
                    description:
                        "Among the questions answered in this episode: Is it better to be tall or shorter? Do animals grow the same wayy that humans do? What superpowers does your brain have before it is done growing?",
                    episodeCount: 2,
                    duration: 22,
                    publishedDate: new Date("Aug 1, 2013"),
                    status: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Music",
                    hostName: "Brains ON",
                    publisher: null,
                    podcastImage: "/imgs/brainsOn.jpg",
                    description:
                        "The questions answered in this episode: What is harmony exactly? What does is take to be a ggreat rapper? How does sound travel?",
                    episodeCount: 3,
                    duration: 21,
                    publishedDate: new Date("Aug 1, 2013"),
                    status: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Sleeping",
                    hostName: "Brains ON",
                    publisher: null,
                    podcastImage: "/imgs/brainsOn.jpg",
                    description:
                        "We have some questions about sleep: Is it possible to control your dreams? Do all animals sleep? Why do we need sleep anyway?",
                    episodeCount: 4,
                    duration: 20,
                    publishedDate: new Date("Aug 1, 2013"),
                    status: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Secrets",
                    hostName: "Brains ON",
                    publisher: null,
                    podcastImage: "/imgs/brainsOn.jpg",
                    description:
                        "If you look a little closer, listen a little harder, you will notice the secret life of things all around you. Want to know about the secret lives of bees, crickets, coral - and your own backyard? Give a listen!",
                    episodeCount: 5,
                    duration: 25,
                    publishedDate: new Date("Oct 1, 2013"),
                    status: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title:
                        "When Camels Roamed the American Southwest- The U.S. Camel Corps(1856-1866)",
                    hostName: "History Unplugged Podcasts",
                    publisher: null,
                    podcastImage: "/imgs/brainsOn.jpg",
                    description:
                        "Welcome to the first episode of the History Unplugged podcast. We are kicking things off by exploring the US Army’s failed experiment of using camels as the military’s main pack animal in the American Southwest. Camels are more than a zoo curiosity that spits on you in front of a field trip of first-graders. They are more than the mascot of your favorite cigarette brand. Camels were the long haul-truck of the ancient world. They created the global economy and the spice road. Were you a Roman Senator you want cinnamon from Sri Lanka or nutmeg from Indonesia? It came to you by camel. Were you a Chinese emperor who wanted gold, henna, storax, frankincense, asbestos, cloth, silk gauze, silk damask, glass, and silver from Arabia? A camel brought it to you. But did you know that America almost chose the camel as its preferred method of long-distance travel in the early nineteenth century? Before railroads or long-distance trucks, some Americans dreamed of millions of camels flooding the Southwest to make desert crossings easy and safe. A Secretary of War named Jefferson Davis thought the plan would work. He dispatched an Army Officer to the Middle East to purchase several dozen dromedaries and hire a few cameleers. Thus the U.S. Camel Corps was born. RESOURCES MENTIONED IN THIS EPISODE To listen to a country song inspired by one of the cameleers, Hi Jolly, click here. MORE INFORMATION ABOUT THE HISTORY UNPLUGGED PODCAST This is the first episode of History Unplugged. It celebrates unsung heroes, mythbusts historical lies, and rediscovers the forgotten stories that changed our world. There are two sorts of episodes that we feature on the History Unplugged podcast: the call-in show and author interviews. For history lovers who listen to podcasts, it is the most comprehensive show of its kind because it's the only one that dedicates episodes to both interviewing experts and answering questions from its audience. It features a call-in show where you can ask our resident historian (Scott Rank, PhD) absolutely anything (What was it like to be a Turkish sultan with 4 wives and 12 concubines? If you were sent back in time, how would you kill Hitler?) and long form interviews with historians who have written about everything—and I mean everything—including gruff World War II generals who flew with airmen on bombing raids, a war horse who gained the rank of sergeant, and presidents who gave their best speeches while drunk. For the call-in show it features an actual history question submitted from a listener just like you. I (Scott) will answer your question in 5-10 minutes. You can submit your questions to me by going here. You can ask me anything. What did the Vikings eat? What was it like to be a Turkish sultan with 4 wives and multiple concubines? If you were sent back in time with your current knowledge, how would you conquer the Roman Empire? What would be the best way to assassinate Hitler? The second sort of episode on our podcast is the long form interview (40 minutes - 1 hour) with top history book authors. These authors have written about everything—and I mean everything—including gruff World War II generals who flew with airmen on bombing raids, a war horse who gained the rank of sergeant, and presidents who gave their best speeches while drunk. I sit down with them and go in-depth on their topics. So far I've been blown away by the stories I've heard. Here are some of our guests lined up in the next few days. Robin Hutton, author of Sgt. Reckless, America's War Horse Mark Will-Weber, author of Mint Juleps with Teddy Roosevelt: The Complete History of Presidential Drinking Prof.",
                    episodeCount: 1,
                    duration: 45,
                    publishedDate: new Date("May 1, 2017"),
                    status: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title:
                        "how a Horse Became a Sergeant in the Korean War --Robin Hutton",
                    hostName: "History Unplugged Podcast",
                    publisher: null,
                    podcastImage: "/imgs/brainsOn.jpg",
                    description:
                        "The story of Reckless—a pack horse in the Korean War who was a beloved household name in the 1950s and the only animal in U.S. history to officially achieve the rank of Sergeant—is one of the strangest, most inspiring, and (sadly) unknown stories of the 20th century. In battle, Reckless made 51 trips—on her own—through 35 miles of rice paddies to deliver ammunition and supplies to her fellow Marines. She was trained to step over communications lines, get down at the sound of incoming fire, and ignore the noise of battle. She carried wounded soldiers to safety and was injured twice herself during the war, earning her two Purple Hearts. Not only was Reckless a great war hero, she fit in with her comrades like any other Marine—regularly swilling beer with the other Marines and inserting herself into group activities. When Robin Hutton discovered her tale in 2006, she was so inspired by the little mare’s story that she was determined to reintroduce Reckless to the world. To rediscover the story of this heroic horse, Hutton interviewed seventy-five Marines who served with Reckless and uncovered over 200 photos, spanning her war days and beyond. Sgt. Reckless reveals heartwarming and hilarious anecdotes about Reckless’s feats and antics, bringing to life the touching story of how a young Korean man’s horse became one of the greatest Marine wartime heroes of all time. Here are other astounding facts about Reckless: In just one day of battle, Reckless made 51 trips carrying 386 rounds (almost five tons) of ammunition, walking over 35 miles through rice paddies and up steep mountains with enemy fire coming in at the rate of 500 rounds per minute. Reckless also carried wounded soldiers away from battle, and she herself was wounded twice, earning two Purple Hearts. Reckless ate anything and everything—but especially scrambled eggs and pancakes in the morning with her morning cup of coffee, along with beer in the evening with her comrades. The Marines loved Reckless so much that in the heat of battle, they threw their flak jackets over her to protect her when incoming fire was heavy, risking their own safety. On April 10, 1954, Reckless was officially promoted to sergeant—an honor never bestowed, before or since, on an animal.",
                    episodeCount: 2,
                    duration: 88,
                    publishedDate: new Date("May 1, 2017"),
                    status: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Music",
                    hostName: "Brains ON",
                    publisher: null,
                    podcastImage: "/imgs/brainsOn.jpg",
                    description: "",
                    episodeCount: 2,
                    duration: 22,
                    publishedDate: new Date("Aug 1, 2013"),
                    status: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Podcasts", null, {});
    },
};
