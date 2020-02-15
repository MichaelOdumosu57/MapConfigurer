const express = require('express')
const app = express()
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const compression = require('compression')
const cors = require('cors')
app.use(compression())
app.use(cors())
// console.log(process.env)

app.get('/env-auth', function (req, res, next) {
    let  { 
        _APIKEY,
        _APPID,
        _AUTHDOMAIN,
        _DATABASEURL,
        _GCM_SENDER_ID,
        _PROJECTID,
        _STORAGEBUCKET
    } = process.env
    let needed = { 
        _APIKEY,
        _APPID,
        _AUTHDOMAIN,
        _DATABASEURL,
        _GCM_SENDER_ID,
        _PROJECTID,
        _STORAGEBUCKET
    } 
    // console.log('got a request from env')
    res.json(needed)  
});



app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
