const Router = require('koa-router')
const candidateService = require('../service/candidate')
const config = require('../knexfile')
const knex = require('knex')(config)
const helper = require('../utils/helper')
const router = new Router()

router.get('/candidate', async(ctx) => {
    const {query} = ctx.request.query
    const search = helper.transformQueryParams(query)
    const data = await candidateService.getAll(search)
    ctx.body = data
})
router.get('/candidate/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await candidateService.getById(id)
    ctx.body = data
})

router.post('/candidate', async(ctx) => {
    let values = ctx.request.body
    let data = await candidateService.createCandidate(values)
    ctx.body = data

})

router.put('/candidate/:id', async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const data = await candidateService.updateCandidate(id, values)
    ctx.body = data

})

router.delete('/candidate/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await candidateService.deleteCandidate(id)
    if (data) {
        ctx.body = "DELETED"
    } else {
        ctx.body = "DATA NOT FOUND"
    }
})

module.exports = router