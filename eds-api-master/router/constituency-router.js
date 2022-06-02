const Router = require('koa-router')
const constituencyService = require('../service/constituency')
const config = require('../knexfile')
const knex = require('knex')(config)
const helper = require('../utils/helper')

const router = new Router()

router.get('/constituency', async(ctx) => {
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)

    const data = await constituencyService.getAll(search)
    ctx.body = data
})

router.get('/constituency/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await constituencyService.getById(id)
    ctx.body = data
})

router.post('/constituency', async(ctx) => {
    let values = ctx.request.body
    let data = await constituencyService.createConstituency(values)
    ctx.body = data

})

router.put('/constituency/:id', async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const data = await constituencyService.updateConstituency(id, values)
    ctx.body = data

})

router.delete('/constituency/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await constituencyService.deleteConstituency(id)
    if (data) {
        ctx.body = "DELETED"
    } else {
        ctx.body = "DATA NOT FOUND"
    }
})

module.exports = router