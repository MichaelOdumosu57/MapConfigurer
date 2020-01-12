const express = require('express')
const app = express()
const port = 3000
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const compression = require('compression')
const cors = require('cors')
app.use(compression())
app.use(cors())


var latestBlog = [
    'Celebration in Boston',
    'The Iphone XS max is here, how can you use it as a cooking Tool?',
    'Winter Solstice',
    'Keeping Healthy for the Holidays',
    'A New Decade',
    '2019’s Best Seller',
    'Popular in The Shop This Week',
    'Cant get enough of Lia Pastries!',
    'Shopping With the Chef',
    'Annie dog turns 3 today',
    'A moment to never forget',
    'Christmas Vacation is almost here',
    'Places to make this winter magical in NYC',
    'Too much coffee health risks',
    'Meaning of December',
    'Honeysweet Memories'
]

app.post('/backend', function (req, res, next) {

    req.on('data',(chunk)=>{
        console.log(chunk.toString())
    })
    req.on('end',(chunk)=>{
        res.json({latestBlog})
    })    
});






app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
