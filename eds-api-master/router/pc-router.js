const Router = require('koa-router')
const pcService = require('../service/pc-service')
const config = require('../knexfile')
const knex = require('knex')(config)

const router = new Router()

router.get('/party_constituency', async(ctx) => {
    const data = await pcService.getAll()
    ctx.body = data
})

module.exports = router
