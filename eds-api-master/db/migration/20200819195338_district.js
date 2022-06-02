
exports.up = function(knex) {
    return knex.schema.createTable('district', function (table) {
        table.increments('district_id').primary().notNullable();

        table.integer('state_id').unsigned().notNullable();
        table.foreign('state_id').references('state_id').inTable('state');
        
        table.string('district_code', 50).unique().notNullable();
        table.string('district_name', 250).notNullable();
        table.string('created_by', 250).notNullable();
        table.string('updated_by', 250).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('status', 50).notNullable();
        table.text('remark');
        })
    };
  

exports.down = function(knex) {
    return knex.schema.dropTable('district')
};
