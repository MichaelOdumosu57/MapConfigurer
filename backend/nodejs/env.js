const express = require('express')
const app = express()
const port = 3001
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const compression = require('compression')
const cors = require('cors')
app.use(compression())
app.use(cors())
// console.log(process.env)

app.get('/env', function (req, res, next) {
    let  { 
        AF_APIKEY,
        AF_APPID,
        AF_AUTHDOMAIN,
        AF_DATABASEURL,
        AF_GCM_SENDER_ID,
        AF_PROJECTID,
        AF_STORAGEBUCKET
    } = process.env
    let needed = { 
        AF_APIKEY,
        AF_APPID,
        AF_AUTHDOMAIN,
        AF_DATABASEURL,
        AF_GCM_SENDER_ID,
        AF_PROJECTID,
        AF_STORAGEBUCKET
    } 
    // console.log('got a request from env')
    res.json(needed)  
});



app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
