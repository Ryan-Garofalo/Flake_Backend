exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, name: "Ryan",fr:0 }),
    knex('users').insert({id: 2, name: "Chelsea",fr:70 }),
    knex('users').insert({id: 3, name: "Eli",fr:10 }),
    knex('users').insert({id: 4, name: "Rick",fr:45 })

  );
};
