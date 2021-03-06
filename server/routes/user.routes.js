const router = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const checkJwt = require('../middleware/check-jwt')


router.post('/new', (req,res, next)=>{
    let user = new User()
    user.userName = req.body.userName
    user.password = req.body.password

    User.findOne({userName: req.body.userName}, (err, existingUser)=>{
        if (err) throw err
        if (existingUser) {
            res.json({
                success:false,
                message:'Account with that email is alredy Exist'
            })
        } else {
            user.save()
            var token = jwt.sign(
                {user: user},config.secret,
                {expiresIn:'7d'}
            );

            res.json({
                success: true,
                message: 'esta enlazado con tu token',
                token: token
            })
        }
    })
})

router.post('/login', (req,res, next)=>{
    User.findOne({userName: req.body.userName}, (err, user)=>{
        if (err) throw err
        if (!user) {
            res.json({
                success: false,
                message: 'usuario no exsiste'
            })
        } else if (user) {
            var validPassword = user.comparePassword(req.body.password)
            if (!validPassword) {
                res.json({
                    success: false,
                    message: 'Clave Encorecta'
                })
            } else{
                var token = jwt.sign(
                    {user: user},config.secret,
                    {expiresIn:'7d'}
                );
                res.json({
                    success:true,
                    message: 'listo!! comiensa fiar',
                    token: token
                })
            }
        }
    })

})

///forde Dev
router.get('/koolup', checkJwt, (req,res, next)=>{
    let tokenInfo = req.decoded.user 
    res.json({
        token: tokenInfo
    })
})





module.exports = router