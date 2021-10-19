
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        {id: 1, name: 'Sweden', flag: 'https://flagcdn.com/w320/se.png', continent: 'Northern Europe'},
        {id: 2, name: 'United States', flag: 'https://flagcdn.com/w320/us.png', continent: 'North America'},
        {id: 3, name: 'Pakistan', flag: 'https://flagcdn.com/w320/pk.png', continent: 'Southern Asia'}
      ]);
    });
};
