const config = require('../knexfile')
const knex = require('knex')(config)

const getById = (id) => {
    return knex('village_tracts').where('village_tracts_id', id).leftJoin('township', 'village_tracts.township_id', 'township.township_id').leftJoin('district', 'township.district_id', 'district.district_id').leftJoin('state', 'district.state_id', 'state.state_id').where('village_tracts.status', 'Active').first()
}

const getAll = (search) => {
    //return knex.select('*').from('village_tracts')
    let query = knex.select('village_tracts.*', 'township.township_name').from('village_tracts').leftJoin('township', 'village_tracts.township_id', 'township.township_id').where('village_tracts.status', 'Active').orderBy('village_tracts_id', 'desc')

    if(search && search.length > 0){
        search.forEach(item => {
            if(item.name == 'village_tracts_name'){
                query = query.where(`village_tracts.${item.name}`, 'like' , `%${item.value}%`)
            }else{
                query = query.where(`township.${item.name}`, item.value)
            }
        });
    }
    
    return query;
}
const updateVillageTracts = (id, values) => {
    return knex('village_tracts').where('village_tracts_id', id).update(values).then(() => {
        return getById(id)
    })
}
const createVillageTracts = (values) => {
    return knex('village_tracts').insert(values).then((result) => {
        return getById(result[0])
    })
}
const deleteVillageTracts = (id) => {
    return knex('village_tracts').where('village_tracts_id', id).update({status: 'Delete'})
}
module.exports = {
    getById,
    getAll,
    updateVillageTracts,
    createVillageTracts,
    deleteVillageTracts
}