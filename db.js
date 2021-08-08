const Sequelize =require('sequelize');

const FilmModel=require('./models/films.js');

const sequelize = new Sequelize('peliculapp','root','',{
    host:'localhost',
    dialect:'mysql'
});

const Film =FilmModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(()=>{
        console.log('Tablas sincronizadas');
    })

    module.exports={
        Film
    }