exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', function(table){
    table.increments('id');
    table.string('friend1_id');
    table.string('friend2_id');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('friends');
};
