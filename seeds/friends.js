exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('friends').del(),

    // Inserts seed entries
    knex('friends').insert({id: 1, friend1_id: "Ryan",friend2_id: "Eli" }),
    knex('friends').insert({id: 2, friend1_id: "Chelsea",friend2_id: "Eli" }),
    knex('friends').insert({id: 3, friend1_id: "Matt",friend2_id: "Eli" }),
    knex('friends').insert({id: 4, friend1_id: "Ryan",friend2_id: "Chelsea" }),
    knex('friends').insert({id: 5, friend1_id: "Matt",friend2_id: "Chelsea" }),
    knex('friends').insert({id: 6, friend1_id: "Ryan",friend2_id: "Matt" }),
    knex('friends').insert({id: 7, friend1_id: "Ryan",friend2_id: "Stephanie" })
  );
};
