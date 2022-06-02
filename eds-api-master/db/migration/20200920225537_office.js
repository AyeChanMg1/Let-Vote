
exports.up = function(knex) {
    return knex.schema.createTable('office', function (table) {
        table.increments('office_id').primary().notNullable();
        
        table.integer("party_id").unsigned().notNullable();
        table.foreign("party_id").references("party_id").inTable("party");

        table.string('office_name', 250).notNullable();
        table.string('address', 250).notNullable();
        table.string('pono', 30).notNullable();
        table.string('phno', 30).notNullable();
        table.string('email', 50).notNullable();
        table.string('own_or_rental', 50).notNullable();
        table.string('created_by', 250).notNullable();
        table.string('updated_by', 250).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('status', 50).notNullable();
        table.text('remark');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('office')
};
