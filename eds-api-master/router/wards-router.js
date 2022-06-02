const Router = require('koa-router')
const wardsService = require('../service/wards')
const config = require('../knexfile')
const knex = require('knex')(config)
const helper = require('../utils/helper')

const router = new Router()

router.get('/wards', async(ctx) => {
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)

    const data = await wardsService.getAll(search)
    ctx.body = data
})

router.get('/wards/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await wardsService.getById(id)
    ctx.body = data
})

router.post('/wards', async(ctx) => {
    let values = ctx.request.body
    let data = await wardsService.createWards(values)
    ctx.body = data

})

router.put('/wards/:id', async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const data = await wardsService.updateWards(id, values)
    ctx.body = data

})

router.delete('/wards/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await wardsService.deleteWards(id)
    if (data) {
        ctx.body = "DELETED"
    } else {
        ctx.body = "DATA NOT FOUND"
    }
})

module.exports = router