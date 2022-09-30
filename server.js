const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

app.use(bodyParser.json());

const api = require('./rotas/');
const PORT = 3080;

app.use('/api', api )

app.get('/',(req,res)=>{
    res.json({
        success:true
    })
})
app.listen(PORT)