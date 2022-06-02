
exports.up = function(knex) {
    return knex.schema.createTable('user', function (table) {
        table.increments('user_id').primary().notNullable();

        table.string('username', 50).notNullable();
        table.string('password', 250).notNullable();
        table.string('email', 50).notNullable();
        table.string('role', 250).notNullable();
        table.string('created_by', 250).notNullable();
        table.string('updated_by', 250).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('status', 50).notNullable();
        table.text('remark');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user')
};
