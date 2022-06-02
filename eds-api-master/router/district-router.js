const Router = require('koa-router')
const districtService = require('../service/district')
const config = require('../knexfile')
const knex = require('knex')(config)
const helper = require('../utils/helper')
const router = new Router()

router.get('/district', async(ctx) => {
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)

    const data = await districtService.getAll(search)
    ctx.body = data
})

router.get('/district/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await districtService.getById(id)
    ctx.body = data
})

router.post('/district', async(ctx) => {
    let values = ctx.request.body
    let data = await districtService.createDistrict(values)
    ctx.body = data

})

router.put('/district/:id', async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const data = await districtService.updateDistrict(id, values)
    ctx.body = data

})

router.delete('/district/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await districtService.deleteDistrict(id)
    if (data) {
        ctx.body = "DELETED"
    } else {
        ctx.body = "DATA NOT FOUND"
    }
})

module.exports = router