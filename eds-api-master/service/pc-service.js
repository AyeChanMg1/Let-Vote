const config = require('../knexfile')
const constituency = require('./constituency')
const knex = require('knex')(config)


const getAll = () => {
    return knex.select('party_constituency.*', 'constituency.constituency_id', 'constituency.constituency_name').from('party_constituency').leftJoin('constituency', 'party_constituency.constituency_id', 'constituency.constituency_id').orderBy('pc_id', 'desc')
}

module.exports = {
    getAll
}