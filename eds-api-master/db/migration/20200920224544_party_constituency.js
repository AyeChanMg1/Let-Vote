
exports.up = function(knex) {
    return knex.schema.createTable('party_constituency', function (table) {
        table.increments('pc_id').primary().notNullable();

        table.integer('party_id').unsigned().notNullable();
        table.foreign('party_id').references('party_id').inTable('party');

        table.integer('constituency_id').unsigned().notNullable();
        table.foreign('constituency_id').references('constituency_id').inTable('constituency');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('party_constituency')
};

