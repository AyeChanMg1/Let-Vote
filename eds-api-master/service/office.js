const config = require('../knexfile')
const knex = require('knex')(config)

const getById = (id) => {
    return knex('office').where('office_id', id).leftJoin('party', 'office.party_id', 'party.party_id').leftJoin('party_constituency', 'party.party_id', 'party_constituency.party_id').leftJoin('constituency', 'party_constituency.constituency_id', 'constituency.constituency_id').leftJoin('township', 'constituency.township_id', 'township.township_id').leftJoin('district', 'township.district_id', 'district.district_id').leftJoin('state', 'district.state_id', 'state.state_id').where('office.status', 'Active').first()
}

const getAll = (search) => {
    let query = knex.select('office.*', 'party.party_name' ).from('office').leftJoin('party', 'office.party_id', 'party.party_id').where('office.status', 'Active').orderBy('office_id', 'desc')

    if(search && search.length > 0){
        search.forEach(item => {
            if(item.name == 'office_name'){
                query = query.where(`office.${item.name}`, 'like' , `%${item.value}%`)
            }else{
                query = query.where(`office.${item.name}`, item.value)
            }
        });
    }
    
    return query;

}
const updateOffice = (id, values) => {
    return knex('office').where('office_id', id).update(values).then(() => {
        return getById(id)
    })
}
const createOffice = (values) => {
    return knex('office').insert(values).then((result) => {
        return getById(result[0])
    })
}
const deleteOffice = (id) => {
    return knex('office').where('office_id', id).update({status: 'Delete'})
}
module.exports = {
    getById,
    getAll,
    updateOffice,
    createOffice,
    deleteOffice
}