const config = require('../knexfile')
const knex = require('knex')(config)

const getById = (id) => {
    return knex('district').where('district_id', id).leftJoin('state', 'district.state_id', 'state.state_id').where('district.status', 'Active').first()
}

const getAll = (search) => {
    //return knex.select('*').from('district')
    let query =  knex.select('district.*', 'state.state_region').from('district').leftJoin('state', 'district.state_id', 'state.state_id').where('district.status', 'Active').orderBy('district_id', 'desc')

    if(search && search.length > 0){
        search.forEach(item => {
            if(item.name == 'district_name'){
                console.log('testing')
                query = query.where(`district.${item.name}`, 'like' , `%${item.value}%`)
            }else{
                query = query.where(`district.${item.name}`, item.value)
            }
        });
    }
    return query;
}

const updateDistrict = (id, values) => {
    return knex('district').where('district_id', id).update(values).then(() => {
        return getById(id)
    })
}

const createDistrict = (values) => {
    return knex('district').insert(values).then((result) => {
        return getById(result[0])
    })
}

const deleteDistrict = (id) => {
    return knex('district').where('district_id', id).update({status: 'Delete'})
}

module.exports = {
    getById,
    getAll,
    updateDistrict,
    createDistrict,
    deleteDistrict
}

