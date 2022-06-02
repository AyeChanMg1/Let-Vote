const config = require('../knexfile')
const knex = require('knex')(config)

const getById = (id) => {
    return knex('voter').where('voter_id', id).leftJoin('wards', 'voter.wards_code', 'wards.wards_code').leftJoin('town', 'wards.town_code', 'town.town_code').leftJoin('village', 'voter.village_code', 'village.village_code').leftJoin('village_tracts', 'village.village_tracts_id', 'village_tracts.village_tracts_id').leftJoin('township', 'voter.township_code', 'township.township_code').leftJoin('district', 'township.district_id', 'district.district_id').leftJoin('state', 'district.state_id', 'state.state_id').where('voter.status', 'Active').first()
   // let village = knex('voter').where('voter_id', id).leftJoin('village', 'voter.village_code', 'village.village_code').leftJoin('village_tracts', 'village.village_tracts_id', 'village_tracts.village_tracts_id').leftJoin('township', 'township.township_code', 'wards.township_code').where('voter.status', 'Active').first()
}

const getAll = (search) => {
    let query = knex.select('voter.*', 'village.village_name','wards.wards_name', "village_tracts.village_tracts_name", 'township.township_name', 'district.district_name', 'state.state_region','town.town_name').from('voter').leftJoin('village', 'voter.village_code', 'village.village_code').leftJoin('wards', 'voter.wards_code','wards.wards_code').leftJoin('village_tracts','village.village_tracts_id','village_tracts.village_tracts_id').leftJoin('township', 'voter.township_code', 'township.township_code').leftJoin('district', 'township.district_id', 'district.district_id').leftJoin('state', 'district.state_id', 'state.state_id').leftJoin('town','wards.town_code','town.town_code').where('voter.status', 'Active').orderBy('voter_id', 'desc')
    //let query = knex.select('*','township.township_name', 'wards.wards_name', 'village.village_name').from('voter').leftJoin('township','voter.township_code','township.twonship_code').leftJoin('wards', 'voter.wards_code', 'wards.wards_code').leftJoin('village', 'voter.village_code', 'village.village_code').where('voter.status', 'Active').orderBy('voter_id', 'desc')
    if(search && search.length > 0){
        search.forEach(item => {
            if(item.name == 'voter_name'){
                query = query.where(`voter.${item.name}`, 'like' , `%${item.value}%`)
            }else if(item.name == '‌wards_code'){
                query = query.where(`voter.${item.name}`, 'like' , `%${item.value}%`)
            }else if(item.name == 'village_code'){
                query = query.where(`voter.${item.name}`, 'like' , `%${item.value}%`)
            }else if(item.name == 'nric_no'){
                query = query.where(`voter.${item.name}`, 'like' , `%${item.value}%`)                
            }else if(item.name == 'father_name'){
                query = query.where(`voter.${item.name}`, 'like' , `%${item.value}%`)                
            }else{
                query = query.where(`voter.${item.name}`, item.value)

            }
        });
    }
    
    return query;
}
const updateVoter = (id, values) => {
    return knex('voter').where('voter_id', id).update(values).then(() => {
        return getById(id)
    })
}
const createVoter = (values) => {
    return knex('voter').insert(values).then((result) => {
        return getById(result[0])
    })
}
const deleteVoter = (id) => {
    return knex('voter').where('voter_id', id).update({status: 'Delete'})
}
module.exports = {
    getById,
    getAll,
    updateVoter,
    createVoter,
    deleteVoter
}