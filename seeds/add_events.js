exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('events').del(),

    // Inserts seed entries
    knex('events').insert({id: 1, name: "Ballin",date:"monday",type:"basketball",organizer_id:1,public:true}),
    knex('events').insert({id: 2, name: "Tennis",date:"monday",type:"Tennis",organizer_id:2,public:true}),
    knex('events').insert({id: 3, name: "Hiking",date:"tuesday",type:"Hiking",organizer_id:1,public:true}),
    knex('events').insert({id: 4, name: "Biking",date:"monday",type:"Biking",organizer_id:3,public: false}),
    knex('events').insert({id: 5, name: "Climbing",date:"friday",type:"Climbing",organizer_id:4,public:true})

  );
};
