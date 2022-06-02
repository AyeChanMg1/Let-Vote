const config = require('../knexfile')
const knex = require('knex')(config)
 
const getAll = () => {
    return knex.select('*').from ('user')
}
 
const getById = (id) => {
    return knex('user').where('user_id', id).first()
}
 
const getUserByUsername = (username) => {
    return knex('user').where('username', username).first()
}

const createUser = (values) => {
    return knex('user').insert(values).then((res) => {
        return getById(res[0])
    })
}
 
const updateUser = (id, values) => {
    return knex('user').where('user_id', id).update(values).then(() => {
        return getById(id)
    })
}
 
const deleteUser = (id) => {
    return knex('user').where('user_id', id).del()
}
 
module.exports = {
    getAll,
    getById,
    createUser,
    updateUser,
    deleteUser,
    getUserByUsername
}