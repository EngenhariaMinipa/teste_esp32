const router = require('express').Router()

router.get('/',(req,res)=>{
    const devices = [{
        id:123,
        nome: "geladeira",
        kwh:23,
        corrente:2.1,
        tensão:127,
        fp:1
    }]
    res.json({
        sucess: true,
        devices: devices
    })
}) 

router.post('/', (req,res)=>{
    res.json(req.body)
    console.log(req.body)
})

module.exports = router