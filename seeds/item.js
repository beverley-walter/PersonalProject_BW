exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, title: 'pants_1', description: 'Cute denims'},
        {id: 1, title: 'pants_2', description: 'Awesome leggings'},
        {id: 1, title: 'pants_3', description: 'Adorable jeans'},
      ]);
    });
};
