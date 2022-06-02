
exports.up = function(knex) {
    return knex.schema.createTable('township', function (table) {
        table.increments('township_id').primary().notNullable();

        table.integer('district_id').unsigned().notNullable();
        table.foreign('district_id').references('district_id').inTable('district');

        table.string('township_code', 250).unique().notNullable();
        table.string('township_name', 250).notNullable();
        table.string('created_by', 250).notNullable();
        table.string('updated_by', 250).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('status', 50).notNullable();
        table.text('remark');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('township')
};
