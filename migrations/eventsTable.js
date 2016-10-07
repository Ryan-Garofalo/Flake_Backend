exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function(table){
    table.increments('id');
    table.string('name');
    table.string('date');
    table.string('type');
    table.string('organizer_id');
    table.boolean('public');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('events');
};
