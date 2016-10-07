exports.up = function(knex, Promise) {
  return knex.schema.createTable('outings', function(table){
    table.increments();
    table.string('user_id');
    table.string('event_id');
    table.integer('participant');
    table.boolean('attended');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('outings');
};
