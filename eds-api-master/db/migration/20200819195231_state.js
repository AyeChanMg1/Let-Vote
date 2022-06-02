exports.up = function(knex) {
    return knex.schema.createTable('state', function (table) {
    
    table.increments('state_id').primary().notNullable();

    table.string('state_code', 50).unique().notNullable();
    table.string('state_region', 50).notNullable();
    table.string('created_by', 250).notNullable();
    table.string('updated_by', 250).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.string('status', 50).notNullable();
    table.text('remark');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('state')
};
