const router = require('express').Router();

require("../mongodb/mongoconn")

const devices = require('./devices');
router.use('/devices', devices);
 

router.get('/', ( req , res)=>{
    res.json({
        success: false,
        message: 'acesso reservado'
    })
});



module.exports = router;