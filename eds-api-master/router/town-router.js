const Router = require('koa-router')
const townService = require('../service/town')
const config = require('../knexfile')
const knex = require('knex')(config)
const helper = require('../utils/helper')

const router = new Router()

router.get('/town', async(ctx) => {
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)

    const data = await townService.getAll(search)
    ctx.body = data
})

router.get('/town/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await townService.getById(id)
    ctx.body = data
})

router.post('/town', async(ctx) => {
    let values = ctx.request.body
    let data = await townService.createTown(values)
    ctx.body = data

})

router.put('/town/:id', async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const data = await townService.updateTown(id, values)
    ctx.body = data

})

router.delete('/town/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await townService.deleteTown(id)
    if (data) {
        ctx.body = "DELETED"
    } else {
        ctx.body = "DATA NOT FOUND"
    }
})

module.exports = router