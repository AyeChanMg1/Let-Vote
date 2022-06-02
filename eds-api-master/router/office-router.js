const Router = require('koa-router')
const officeService = require('../service/office')
const config = require('../knexfile')
const knex = require('knex')(config)
const helper = require('../utils/helper')


const router = new Router()

router.get('/office', async(ctx) => {
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)
    const data = await officeService.getAll(search)
    ctx.body = data
})

router.get('/office/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await officeService.getById(id)
    ctx.body = data
})

router.post('/office', async(ctx) => {
    let values = ctx.request.body
    let data = await officeService.createOffice(values)
    ctx.body = data

})

router.put('/office/:id', async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const data = await officeService.updateOffice(id, values)
    ctx.body = data

})

router.delete('/office/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await officeService.deleteOffice(id)
    if (data) {
        ctx.body = "DELETED"
    } else {
        ctx.body = "DATA NOT FOUND"
    }
})

module.exports = router