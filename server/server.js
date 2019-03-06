require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')



const app =  express()

mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true },(err)=>{
    if (err) {
        console.log(`Mcod:.......................v1.0 ${err}`);
    } else {
        console.log(`mlab DB is runing.......`);
    }
})


app.use(
    bodyParser.json(),
    bodyParser.urlencoded({extended:false}),
    morgan('dev'),
    cors()
)

const userRouters = require('./routes/user.routes')


app.use('/api/accounts',userRouters)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('build'))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'build','index.html'))
    })
}




app.listen(process.env.PORT ,()=>{
    console.log('node.js server is runing........');
})