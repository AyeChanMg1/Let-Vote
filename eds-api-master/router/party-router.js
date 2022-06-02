const Router = require('koa-router')
const partyService = require('../service/party')
const config = require('../knexfile')
const knex = require('knex')(config)
const helper = require('../utils/helper')


const router = new Router()

router.get('/party', async(ctx) => {
    // const data = await partyService.getAll()
    // ctx.body = data
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)

    const data = await partyService.getAll(search)
    ctx.body = data
})

router.get('/party/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await partyService.getById(id)
    ctx.body = data
})

router.post('/party', async(ctx) => {
    let values = ctx.request.body
    let data = await partyService.createParty(values)
    ctx.body = data

})

router.put('/party/:id', async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const data = await partyService.updateParty(id, values)
    ctx.body = data

})

router.delete('/party/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await partyService.deleteParty(id)
    if (data) {
        ctx.body = "DELETED"
    } else {
        ctx.body = "DATA NOT FOUND"
    }
})

module.exports = router