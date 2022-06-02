const Router = require('koa-router')
const vtractsService = require('../service/villagetracts')
const config = require('../knexfile')
const knex = require('knex')(config)
const helper = require('../utils/helper')

const router = new Router()

router.get('/village_tracts', async(ctx) => {
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)
    const data = await vtractsService.getAll(search)
    ctx.body = data
})

router.get('/village_tracts/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await vtractsService.getById(id)
    ctx.body = data
})

router.post('/village_tracts', async(ctx) => {
    let values = ctx.request.body
    let data = await vtractsService.createVillageTracts(values)
    ctx.body = data

})

router.put('/village_tracts/:id', async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const data = await vtractsService.updateVillageTracts(id, values)
    ctx.body = data

})

router.delete('/village_tracts/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await vtractsService.deleteVillageTracts(id)
    if (data) {
        ctx.body = "DELETED"
    } else {
        ctx.body = "DATA NOT FOUND"
    }
})

module.exports = router