exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('events').del(),

    // Inserts seed entries
    knex('events').insert({name: "Ballin",date:"monday",type:"basketball",organizer_id:1,public:true}),
    knex('events').insert({name: "Tennis",date:"monday",type:"Tennis",organizer_id:2,public:true}),
    knex('events').insert({name: "Hiking",date:"tuesday",type:"Hiking",organizer_id:1,public:true}),
    knex('events').insert({name: "Biking",date:"monday",type:"Biking",organizer_id:3,public: false}),
    knex('events').insert({name: "Climbing",date:"friday",type:"Climbing",organizer_id:4,public:true})

  );
};
