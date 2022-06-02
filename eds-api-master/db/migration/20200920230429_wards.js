
exports.up = function(knex) {
    return knex.schema.createTable('wards', function (table) {
        table.increments('wards_id').primary().notNullable();

        table.string("town_code", 50)
        //table.string("village_code", 50);

        table.string('wards_code', 50).unique().notNullable();
        table.string('wards_name', 250).notNullable();
        table.string('created_by', 250).notNullable();
        table.string('updated_by', 250).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('status', 50).notNullable();
        table.text('remark');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('wards')
};

