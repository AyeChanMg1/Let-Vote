const Router = require('koa-router')
const townshipService = require('../service/township')
const config = require('../knexfile')
const knex = require('knex')(config)
const helper = require('../utils/helper')

const router = new Router()

router.get('/township', async(ctx) => {
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)

    const data = await townshipService.getAll(search)
    ctx.body = data
})

router.get('/township/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await townshipService.getById(id)
    ctx.body = data
})

router.post('/township', async(ctx) => {
    let values = ctx.request.body
    let data = await townshipService.createTownship(values)
    ctx.body = data

})

router.put('/township/:id', async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const data = await townshipService.updateTownship(id, values)
    ctx.body = data

})

router.delete('/township/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await townshipService.deleteTownship(id)
    if (data) {
        ctx.body = "DELETED"
    } else {
        ctx.body = "DATA NOT FOUND"
    }
})

module.exports = router