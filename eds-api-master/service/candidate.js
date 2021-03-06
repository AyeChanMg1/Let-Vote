const config = require('../knexfile')
const knex = require('knex')(config)

const getById = (id) => {
    return knex.select('candidate.*', 'constituency.constituency_name', 'party.party_name', 'village.village_name','wards.wards_name', "village_tracts.village_tracts_name", 'township.township_name', 'district.district_name', 'state.state_region','town.town_name').where('candidate_id', id).from('candidate').leftJoin('village', 'candidate.village_code', 'village.village_code').leftJoin('wards', 'candidate.wards_code','wards.wards_code').leftJoin('village_tracts','village.village_tracts_id','village_tracts.village_tracts_id').leftJoin('township', 'candidate.township_code', 'township.township_code').leftJoin('district', 'township.district_id', 'district.district_id').leftJoin('state', 'district.state_id', 'state.state_id').leftJoin('town','wards.town_code','town.town_code').leftJoin('constituency', 'candidate.constituency_id', 'constituency.constituency_id').leftJoin('party', 'candidate.party_id', 'party.party_id').where('candidate.status', 'Active').first()
}

const getAll = (search) => {
    let query = knex.select('candidate.*','township.township_name', 'constituency.constituency_name', 'party.party_name', 'village.village_name','wards.wards_name', "village_tracts.village_tracts_name", 'township.township_name', 'district.district_name', 'state.state_region','town.town_name').from('candidate').leftJoin('village', 'candidate.village_code', 'village.village_code').leftJoin('wards', 'candidate.wards_code','wards.wards_code').leftJoin('village_tracts','village.village_tracts_id','village_tracts.village_tracts_id').leftJoin('township', 'candidate.township_code', 'township.township_code').leftJoin('district', 'township.district_id', 'district.district_id').leftJoin('state', 'district.state_id', 'state.state_id').leftJoin('town','wards.town_code','town.town_code').leftJoin('constituency', 'candidate.constituency_id', 'constituency.constituency_id').leftJoin('party', 'candidate.party_id', 'party.party_id').where('candidate.status', 'Active').orderBy('candidate_id', 'desc')
    if(search && search.length > 0){
        search.forEach(item => {
            if(item.name == 'candidate_name'){
                query = query.where(`candidate.${item.name}`, 'like' , `%${item.value}%`)
            }else if(item.name == 'township_name'){
                query = query.where(`township.${item.name}`, 'like' , `%${item.value}%`)
            }else{
                query = query.where(`candidate.${item.name}`, item.value)
            }
        });
    }
    
    return query;
}
const updateCandidate = (id, values) => {
    return knex('candidate').where('candidate_id', id).update(values).then(() => {
        return getById(id)
    })
}
const createCandidate = (values) => {
    return knex('candidate').insert(values).then((result) => {
        return getById(result[0])
    })
}
const deleteCandidate = (id) => {
    return knex('candidate').where('candidate_id', id).update({status: 'Delete'})
}
module.exports = {
    getById,
    getAll,
    updateCandidate,
    createCandidate,
    deleteCandidate
}