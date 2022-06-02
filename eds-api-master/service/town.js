const config = require('../knexfile')
const knex = require('knex')(config)

const getById = (id) => {
    return knex('town').where('town_id', id).leftJoin('township', 'town.township_id', 'township.township_id').leftJoin('district', 'township.district_id', 'district.district_id').leftJoin('state', 'district.state_id', 'state.state_id').where('town.status', 'Active').first()
}

const getAll = (search) => {
    let query =  knex.select('town.*', 'township.township_name').from('town').leftJoin('township', 'town.township_id', 'township.township_id').where('town.status', 'Active').orderBy('town_id', 'desc')
    
    if(search && search.length > 0){
        search.forEach(item => {
            if(item.name == 'town_name'){
                query = query.where(`town.${item.name}`, 'like' , `%${item.value}%`)
            }else{
                query = query.where(`township.${item.name}`, item.value)
            }
        });
    }
    
    return query;


}
const updateTown = (id, values) => {
    return knex('town').where('town_id', id).update(values).then(() => {
        return getById(id)
    })
}
const createTown = (values) => {
    return knex('town').insert(values).then((result) => {
        return getById(result[0])
    })
}
const deleteTown = (id) => {
    return knex('town').where('town_id', id).update({status: 'Delete'})
}
module.exports = {
    getById,
    getAll,
    updateTown,
    createTown,
    deleteTown
}