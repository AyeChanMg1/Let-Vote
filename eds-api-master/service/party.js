const config = require('../knexfile')
const knex = require('knex')(config)

const getById = (id) => {
    return knex('party').where('party_id', id).leftJoin('wards', 'party.wards_code', 'wards.wards_code').leftJoin('town', 'wards.town_code', 'town.town_code').leftJoin('township', 'town.township_id', 'township.township_id').leftJoin('district', 'township.district_id', 'district.district_id').leftJoin('state', 'district.state_id', 'state.state_id').where('party.status', 'Active').first()
}

const getAll = (search) => {

     //let query =  knex.select ('party.*', 'constituency.constituency_name').from('party').leftJoin('party_constituency', 'party.party_id', 'party_constituency.party_id').leftJoin('constituency', 'party_constituency.constituency_id', 'constituency.constituency_id').where('party.status', 'Active').orderBy('party_id', 'desc')
     let query =  knex.select ('party.*','wards.wards_name').from('party').leftJoin('wards','party.wards_code','wards.wards_code').where('party.status', 'Active').orderBy('party_id', 'desc')

    if(search && search.length > 0){
        search.forEach(item => {
            if(item.name == 'party_name'){
                query = query.where(`party.${item.name}`, 'like' , `%${item.value}%`)
            }else if(item.name == 'abbreviation'){
                query = query.where(`party.${item.name}`, 'like' , `%${item.value}%`)
            }else{
                query = query.where(`township.${item.name}`, item.value)

            }
        });
    }
    
    return query;

}
const updateParty = (id, values) => {
    return knex('party').where('party_id', id).update(values).then(() => {
        return getById(id)
    })
}
const createParty = (values) => {
    return knex('party').insert(values).then((result) => {
        return getById(result[0])
    })
}
const deleteParty = (id) => {
    return knex('party').where('party_id', id).update({status: 'Delete'})
}
module.exports = {
    getById,
    getAll,
    updateParty,
    createParty,
    deleteParty
}