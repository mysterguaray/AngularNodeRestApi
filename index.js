const express = require('express');
//const bodyParser=require('body-parser');

const app= express();

require('./db');

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));

//por si el bodyParser falla al estar deprecated
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req, rest)=>{
    rest.send('Hola mundo');
})

app.listen(3000, ()=>{
    console.log('servidor andando');
});