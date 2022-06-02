const config = require('../knexfile')
const knex = require('knex')(config)

const getById = (id) => {
    return knex('wards').where('wards_id', id).leftJoin('town', 'wards.town_code', 'town.town_code').leftJoin('township', 'town.township_id', 'township.township_id').leftJoin('district', 'township.district_id', 'district.district_id').leftJoin('state', 'district.state_id', 'state.state_id').where('wards.status', 'Active').first()
}

const getAll = (search) => {
    let query = knex.select('*').from('wards').leftJoin('town', 'wards.town_code', 'town.town_code').where('wards.status', 'Active').orderBy('wards_id', 'desc')

    if(search && search.length > 0){
        search.forEach(item => {
            if(item.name == 'wards_name'){
                query = query.where(`wards.${item.name}`, 'like' , `%${item.value}%`)
            }else{
                query = query.where(`town.${item.name}`, item.value)
            }
        });
    }
    
    return query;
}

const updateWards = (id, values) => {
    return knex('wards').where('wards_id', id).update(values).then(() => {
        return getById(id)
    })
}

const createWards = (values) => {
    return knex('wards').insert(values).then((result) => {
        return getById(result[0])
    })
}

const deleteWards = (id) => {
    return knex('wards').where('wards_id', id).update({status: 'Delete'})
}

module.exports = {
    getById,
    getAll,
    updateWards,
    createWards,
    deleteWards
}