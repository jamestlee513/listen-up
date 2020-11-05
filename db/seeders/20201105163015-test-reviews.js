'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      { content: 'Nulla nec enim facilisis erat sollicitudin suscipit nec eget massa. Donec porttitor, neque nec laoreet pulvinar, erat dolor molestie nulla, ut malesuada nisi sapien eu dui. Sed varius lorem ut posuere malesuada. Vestibulum ex lacus, ultricies ac congue ac, ullamcorper in purus. Aenean accumsan urna hendrerit augue interdum, bibendum tincidunt justo sollicitudin. Pellentesque interdum dui eros, quis posuere lectus hendrerit nec. Nam mollis molestie erat eget facilisis. Vestibulum ornare tortor leo, in vestibulum justo blandit rutrum. Nulla pretium aliquet consectetur. Fusce sit amet pulvinar sapien, vitae tempus neque. Sed finibus venenatis fringilla. Nunc eu varius enim. Phasellus ac ligula enim. Proin dignissim mauris non purus auctor efficitur. Cras lacinia convallis sem, a hendrerit lectus porttitor sit amet.', userId: 1, podcastId: 1, createdAt: new Date(), updatedAt: new Date() },
      { content: 'Mauris at convallis metus. Aenean tempus ac nulla nec congue. Nunc laoreet venenatis tellus ut condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus porttitor, turpis condimentum posuere egestas, urna ante finibus dui, in auctor velit ipsum id enim. Fusce ut lectus vitae enim lacinia mollis nec non nunc. Etiam pulvinar nunc elit, sed porttitor justo fermentum nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi consectetur lacus a nisi sollicitudin ullamcorper. Fusce placerat libero ante, aliquam finibus odio aliquam vitae. Nulla ipsum dui, efficitur nec tempor et, accumsan vitae libero. Maecenas eget urna nisl. Aliquam orci risus, efficitur vel finibus nec, vestibulum sit amet nulla.', userId: 1, podcastId: 2, createdAt: new Date(), updatedAt: new Date() },
      { content: 'Quisque eget maximus ante. Nullam eget interdum mi. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam at mattis dui. Quisque ut leo lacinia, lacinia justo at, lobortis ipsum. Vestibulum ullamcorper congue est sit amet fermentum. In sagittis ligula ut risus viverra, quis feugiat neque accumsan. Nunc nec eleifend leo.', userId: 1, podcastId: 3, createdAt: new Date(), updatedAt: new Date() },
      { content: 'Integer tristique eros ut dui fringilla venenatis. Donec imperdiet erat sed congue posuere. Aenean malesuada eros purus, in semper urna semper eget. Donec eu augue eget dolor finibus malesuada ac in nisl. Pellentesque vulputate hendrerit neque a venenatis. Praesent egestas rhoncus nisi, nec volutpat est consectetur a. Donec non sapien interdum, imperdiet massa at, consequat libero. Phasellus pretium ut lorem quis sollicitudin.', userId: 1, podcastId: 4, createdAt: new Date(), updatedAt: new Date() },
      { content: 'Nam eu orci sit amet mauris ultrices ultricies sit amet ut ligula. Fusce luctus enim egestas, malesuada metus a, interdum elit. Morbi est ante, aliquam non aliquet in, placerat sit amet tortor. Aliquam erat volutpat. Donec auctor bibendum ornare. Ut congue, tellus in commodo aliquet, nulla leo laoreet massa, at efficitur justo justo vitae tortor. Quisque semper mattis ex, in aliquam massa ultricies eget. Morbi euismod leo elit, a pharetra libero scelerisque eu.', userId: 1, podcastId: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
