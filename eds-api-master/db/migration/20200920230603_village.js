
exports.up = function(knex) {
    return knex.schema.createTable('village', function (table) {
        table.increments('village_id').primary().notNullable();

        table.integer('village_tracts_id').unsigned().notNullable();
        table.foreign('village_tracts_id').references('village_tracts_id').inTable('village_tracts');
        
        table.string('village_code', 250).unique().notNullable();
        table.string('village_name', 250).notNullable();
        table.string('created_by', 250).notNullable();
        table.string('updated_by', 250).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('status', 50).notNullable();
        table.text('remark');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('village')
};
