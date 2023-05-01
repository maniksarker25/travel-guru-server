const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const places = require('./data/places.json')

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Travel is running')
})

app.get('/places',(req,res)=>{
    res.send(places)
})

app.listen(port,()=>{
    console.log(`The travel api running on port:${port}`)
})