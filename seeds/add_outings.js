exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('outings').del(),

    // Inserts seed entries
    knex('outings').insert({id: 1, user_id: 1,event_id:1,participant:2,attended:false}),
    knex('outings').insert({id: 2, user_id: 1,event_id:1,participant:2,attended:true}),
    knex('outings').insert({id: 3, user_id: 1,event_id:1,participant:2,attended:true}),
    knex('outings').insert({id: 4, user_id: 1,event_id:1,participant:2,attended:false}),
    knex('outings').insert({id: 5, user_id: 1,event_id:1,participant:2,attended:false})
  );
};
