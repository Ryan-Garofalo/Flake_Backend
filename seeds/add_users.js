exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, name: "Ryan" }),
    knex('users').insert({id: 2, name: "Chelsea" }),
    knex('users').insert({id: 3, name: "Eli" }),
    knex('users').insert({id: 4, name: "Rick" })

  );
};
