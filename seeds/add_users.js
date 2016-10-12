exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, name: "Ryan",fr:0,events:200 }),
    knex('users').insert({id: 2, name: "Chelsea",fr:25,events:150 }),
    knex('users').insert({id: 3, name: "Eli",fr:10,events:200 }),
    knex('users').insert({id: 4, name: "Rick",fr:45,events:300}),
    knex('users').insert({id: 5, name: "Stephanie",fr:99,events:100}),
    knex('users').insert({id: 6, name: "Matt",fr:20,events:100})
  );
};
