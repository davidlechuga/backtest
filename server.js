const express = require ('express')
const router = require ('./src/routers/trabajadores')
const app = express();
app.use(express.json())

app.use('/trabajadores', router)

app.get ('/', (req,res) =>{
    res.json({
        message: "hola"
    })
})



module.exports = app