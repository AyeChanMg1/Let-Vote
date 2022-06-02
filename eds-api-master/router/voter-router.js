const Router = require('koa-router')
const voterService = require('../service/voter')
const config = require('../knexfile')
const knex = require('knex')(config)
const helper = require('../utils/helper')

const router = new Router()

router.get('/voter', async(ctx) => {
    // const data = await voterService.getAll()
    // ctx.body = data
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)

    const data = await voterService.getAll(search)
    ctx.body = data

})

router.get('/voter/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await voterService.getById(id)
    ctx.body = data
})

router.post('/voter', async(ctx) => {
    let values = ctx.request.body
    let data = await voterService.createVoter(values)
    ctx.body = data

})

router.put('/voter/:id', async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const data = await voterService.updateVoter(id, values)
    ctx.body = data

})

router.delete('/voter/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await voterService.deleteVoter(id)
    if (data) {
        ctx.body = "DELETED"
    } else {
        ctx.body = "DATA NOT FOUND"
    }
})

module.exports = router