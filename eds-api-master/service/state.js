const config = require('../knexfile')
const knex = require('knex')(config)

const getById = (id) => {
    return knex('state').where({'state_id': id, 'status': 'Active'}).first()
}

const getAll = (search) => {
    let query =knex.select('*').from('state').where('status', 'Active').orderBy('state_id', 'desc')
    
    if(search && search.length > 0){
        search.forEach(item => {
            if(item.name == 'state_region'){
                console.log('testing')
                query = query.where(`state.${item.name}`, 'like' , `%${item.value}%`)
            }else{
                query = query.where(`state.${item.name}`, item.value)
            }
        });
    }
    
    return query;

}

const updateState = (id, values) => {
    return knex('state').where('state_id', id).update(values).then(() => {
        return getById(id)
    })
}
const createState = (values) => {
    return knex('state').insert(values).then((err,result) => {
            return getById(result[0])
    })
}

const deleteState = (id) => {
    return knex('state').where('state_id', id).update({status: 'Delete'})
}
module.exports = {
    getById,
    getAll,
    updateState,
    createState,
    deleteState
}