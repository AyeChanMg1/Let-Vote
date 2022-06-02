const config = require('../knexfile')
const knex = require('knex')(config)

const getById = (id) => {
    return knex('constituency').where('constituency_id', id).leftJoin('township', 'constituency.township_id', 'township.township_id').leftJoin('district', 'township.district_id', 'district.district_id').leftJoin('state', 'district.state_id', 'state.state_id').where('constituency.status', 'Active').first()
}

const getAll = (search) => {
    let query =  knex.select('constituency.*', 'township.township_name', 'township.township_id').from('constituency').leftJoin('township', 'constituency.township_id', 'township.township_id').where('constituency.status', 'Active').orderBy('constituency_id', 'desc')
    
    if(search && search.length > 0){
        search.forEach(item => {
            if(item.name == 'constituency_name'){
                query = query.where(`constituency.${item.name}`, 'like' , `%${item.value}%`)
            }else{
                 query = query.where(`constituency.${item.name}`, item.value)  
            }
        });
    }
    
    return query;

}
const updateConstituency = (id, values) => {
    return knex('constituency').where('constituency_id', id).update(values).then(() => {
        return getById(id)
    })
}
const createConstituency = (values) => {
    console.log(values, 'constituency')
    let wardsList = values.wards_code
    //delete values.party_id
    let list=[]
    wardsList.forEach((item) => {
        list.push({wards_code: item})
    })
    return knex('constituency').insert(list).then((result) => {
        // let cons_id = result[0]
        // let list = []
        // wardsList.forEach((item) => {
        //     list.push({wards_code: item, constituency_id: cons_id})
        // })
        // console.log(list)
        // await knex('constituency').insert(list)
        return getById(result[0])
    })
}
const deleteConstituency = (id) => {
    return knex('constituency').where('constituency_id', id).update({status: 'Delete'})
}
module.exports = {
    getById,
    getAll,
    updateConstituency,
    createConstituency,
    deleteConstituency
}