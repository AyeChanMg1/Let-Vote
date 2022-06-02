const config = require('../knexfile')
const knex = require('knex')(config)

const getById = (id) => {
    return knex('village').where('village_id', id).leftJoin('village_tracts', 'village.village_tracts_id', 'village_tracts.village_tracts_id').leftJoin('township', 'village_tracts.township_id', 'township.township_id').leftJoin('district', 'township.district_id', 'district.district_id').leftJoin('state', 'district.state_id', 'state.state_id').where('village.status', 'Active').first()
}

const getAll = (search) => {
    //return knex.select('*').from('village')
    let query = knex.select('village.*', 'village_tracts.village_tracts_name').from('village').leftJoin('village_tracts', 'village.village_tracts_id', 'village_tracts.village_tracts_id').where('village.status', 'Active').orderBy('village_id', 'desc')

    if(search && search.length > 0){
        search.forEach(item => {
            if(item.name == 'village_name'){
                query = query.where(`village.${item.name}`, 'like' , `%${item.value}%`)
            }if(item.name == 'village_tracts_name'){
                query = query.where(`village.${item.name}`, 'like' , `%${item.value}%`)
            }else{
                query = query.where(`village.${item.name}`, item.value)
            }
        });
    }
    
    return query;
}
const updateVillage = (id, values) => {
    return knex('village').where('village_id', id).update(values).then(() => {
        return getById(id)
    })
}
const createVillage = (values) => {
    return knex('village').insert(values).then((result) => {
        return getById(result[0])
    })
}
const deleteVillage = (id) => {
    return knex('village').where('village_id', id).update({status: 'Delete'})
}
module.exports = {
    getById,
    getAll,
    updateVillage,
    createVillage,
    deleteVillage
}