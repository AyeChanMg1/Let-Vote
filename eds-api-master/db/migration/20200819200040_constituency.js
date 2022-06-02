
exports.up = function(knex) {
    return knex.schema.createTable('constituency', function (table) {
        table.increments('constituency_id').primary().notNullable();

        table.integer('township_id').unsigned().notNullable();
        table.foreign('township_id').references('township_id').inTable('township');

        table.string('constituency_name', 250).notNullable();
        table.string('election_name', 250).notNullable();
        table.string('parliament_type', 250);
        table.string('created_by', 250).notNullable();
        table.string('updated_by', 250).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('status', 50).notNullable();
        table.text('remark');
        })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('constituency')
  
};
