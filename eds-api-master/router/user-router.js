const Router = require('koa-router')
const config = require('../knexfile')
const knex = require('knex')(config)
const bcrypt = require('bcrypt');

const userService = require('../service/user')
 
const router = new Router()
 
router.get('/user', async(ctx) => {
    const data = await userService.getAll()
    ctx.body = data
})
 
router.get('/user/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await userService.getById(id)
    ctx.body = data
})
 
router.post('/user', async(ctx) => {
    const values = ctx.request.body
    values.password = bcrypt.hashSync(values.password, 10);
    const data = await userService.createUser(values)
    ctx.body = data
})
 
router.post('/login', async(ctx) => {
    let {username, password} = ctx.request.body
    const user = await userService.getUserByUsername(username)
    if(user){
        let checkPassword = bcrypt.compareSync(password, user.password);
        console.log(checkPassword, "checkPassword")
        if(checkPassword){
            ctx.body = {
                status: 200,
                message: "Login Success",
                data: {
                    username: user.username,
                    email: user.email,
                    role: user.role
                }
            }
        }else{
            ctx.body = {
                status: 400,
                message: "Invalid Username or Password"
            }
        }
    }else{
        ctx.body = {
            status: 400,
            message: "Invalid Username or Password"
        }
    }

})

router.put('/user/:id', async(ctx) => {
    const id = ctx.params.id
    const values = ctx.request.body
    const data = await userService.updateUser(id, values)
    ctx.body = data
})
 
router.delete('/user/:id', async(ctx) => {
    const id = ctx.params.id
    const data = await userService.deleteUser(id)
    if(data){
        ctx.body = "DELETED"
    }else{
        ctx.body = "NOT ROW FOUND"
    }
})
 
module.exports = router