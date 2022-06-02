
exports.up = function(knex) {
    return knex.schema.createTable('voter', function (table) {
        table.increments('voter_id').primary().notNullable();

        table.string('wards_code', 50);
        table.string('village_code', 50);
        table.string('township_code', 50);
        
        table.string('voter_name', 250).notNullable();
        table.string('nric_no', 50).unique().notNullable();
        table.date('date_of_birth');
        table.string('race', 250).notNullable();
        table.string('religion', 30).notNullable();
        table.string('father_name', 250)

        table.string('created_by', 250)
        table.string('updated_by', 250)
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('status', 50).notNullable();
        table.text('remark');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('voter')
};
