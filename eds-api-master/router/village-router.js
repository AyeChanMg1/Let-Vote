const Router = require('koa-router')
const villageService = require('../service/village')
const config = require('../knexfile')
const knex = require('knex')(config)
const helper = require('../utils/helper')

const router = new Router()

router.get('/village', async(ctx) => {
    const {query} = ctx.request.query
    console.log(query)
    const search = helper.transformQueryParams(query)
    const data = await villageService.getAll(search)
    ctx.body = data
})

router.get('/village/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await villageService.getById(id)
    ctx.body = data
})

router.post('/village', async(ctx) => {
    let values = ctx.request.body
    let data = await villageService.createVillage(values)
    ctx.body = data

})

router.put('/village/:id', async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const data = await villageService.updateVillage(id, values)
    ctx.body = data

})

router.delete('/village/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await villageService.deleteVillage(id)
    if (data) {
        ctx.body = "DELETED"
    } else {
        ctx.body = "DATA NOT FOUND"
    }
})

module.exports = router