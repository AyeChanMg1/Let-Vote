const config = require('../knexfile')
const knex = require('knex')(config)

const getById = (id) => {
    return knex('township').where('township_id', id).leftJoin('district', 'township.district_id', 'district.district_id').leftJoin('state', 'district.state_id', 'state.state_id').where('township.status', 'Active').first()
}

const getAll = (search) => {
    let query =  knex.select('township.*', 'district.district_name').from('township').leftJoin('district', 'township.district_id', 'district.district_id').where('township.status', 'Active').orderBy('township_id', 'desc')

    if(search && search.length > 0){
        search.forEach(item => {
            if(item.name == 'township_name'){
                console.log('testing')
                query = query.where(`township.${item.name}`, 'like' , `%${item.value}%`)
            }else{
                query = query.where(`township.${item.name}`, item.value)
            }
        });
    }
    
    return query;


}
const updateTownship = (id, values) => {
    return knex('township').where('township_id', id).update(values).then(() => {
        return getById(id)
    })
}
const createTownship = (values) => {
    return knex('township').insert(values).then((result) => {
        return getById(result[0])
    })
}
const deleteTownship = (id) => {
    return knex('township').where('township_id', id).update({status: 'Delete'})
}
module.exports = {
    getById,
    getAll,
    updateTownship,
    createTownship,
    deleteTownship
}