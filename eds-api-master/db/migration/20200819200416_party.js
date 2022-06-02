
exports.up = function(knex) {
    return knex.schema.createTable('party', function (table) {
        
        table.increments('party_id').primary().notNullable();
        
        table.longtext('image')
        table.string('party_name', 250).unique().notNullable();
        table.string('party_eng_name', 250).unique()
        table.string('chair_person', 250)
        table.string('abbreviation', 250)
        table.longtext('history')
        table.string('founder', 250)
        table.string('founded', 250)
        table.string('political_ideology', 250)
        table.string('political_position', 250)
        table.string('wards_code', 50);
        
        table.string('created_by', 250)
        table.string('updated_by', 250)
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('status', 50).notNullable();
        table.text('remark');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('party')
};
