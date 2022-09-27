const express = require('express')
const router = require('./SRC/Router/hobbyRoute')
const sayHI = require('./SRC/Middleware/hobbyMiddleware')

const app = express()
app.use(express.json())

app.use('/hobby',sayHI, router)

app.listen(9000, ()=>{
    console.log('your hobby app is running')
})