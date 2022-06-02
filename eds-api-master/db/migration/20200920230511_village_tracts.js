
exports.up = function(knex) {
    return knex.schema.createTable('village_tracts', function (table) {
        table.increments('village_tracts_id').primary().notNullable();

        table.integer('township_id').unsigned().notNullable();
        table.foreign('township_id').references('township_id').inTable('township');
        
        table.string('village_tracts_code', 250).unique().notNullable();
        table.string('village_tracts_name', 250).notNullable();
        table.string('created_by', 250).notNullable();
        table.string('updated_by', 250).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('status', 50).notNullable();
        table.text('remark');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('village_tracts')
};
