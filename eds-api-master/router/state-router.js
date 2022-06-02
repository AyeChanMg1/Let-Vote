const Router = require('koa-router')
const stateService = require('../service/state')
const config = require('../knexfile')
const knex = require('knex')(config)
const helper = require('../utils/helper')
const bcrypt = require('bcrypt');

const router = new Router()

router.get('/state', async(ctx) => {
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)
    console.log(search, "search")
    const data = await stateService.getAll(search)
    ctx.body = data
})

router.get('/state/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await stateService.getById(id)
    ctx.body = data
})

router.post('/state', async(ctx) => {
    let values = ctx.request.body
    let data = await stateService.createState(values)
    if(data){
        ctx.body = data
    }else{
        ctx.body = {
            status: 500,
            message: "Invalid Username or Password"
        }
    }
    
})

router.put('/state/:id', async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const data = await stateService.updateState(id, values)
    ctx.body = data

})

router.delete('/state/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await stateService.deleteState(id)
    console.log(data, "data")
    if (data) {
        ctx.body = "DELETED"
    } else {
        ctx.body = "DATA NOT FOUND"
    }
})

module.exports = router