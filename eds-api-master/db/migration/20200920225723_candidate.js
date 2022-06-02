
exports.up = function(knex) {
    return knex.schema.createTable('candidate', function (table) {
        table.increments('candidate_id').primary().notNullable();
        
        table.integer('party_id').unsigned().notNullable();
        table.foreign('party_id').references('party_id').inTable('party');
        
        table.integer('constituency_id').unsigned();
        table.foreign('constituency_id').references('constituency_id').inTable('constituency');

        table.string('wards_code', 50);
        table.string('village_code', 50);
        table.string('township_code', 50);

        table.string('candidate_name', 250).notNullable()
        table.longtext('image');
        table.string('election_name', 250).notNullable();
        table.string('nric_no', 50).unique().notNullable();
        table.date('date_of_birth');
        table.string('race', 250).notNullable();
        table.string('religion', 30).notNullable();
        table.string('education', 250).notNullable();
        table.string('occupation', 250).notNullable();
        table.string('parliament_type', 250);
        table.longtext('history');

        table.string('created_by', 250)
        table.string('updated_by', 250)
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('status', 50)
        table.text('remark');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('candidate')
};
