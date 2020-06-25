const express = require('express');
const morgan = require('morgan');
const html = require('html-template-tag');
const layout = require('./views/layout');
const pg = require('pg')
const Sequelize = require('sequelize');
const models = require('./models');


const app = express();



app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.get('/', (req,res) => {
    res.send(layout('hi'));
});

const PORT = 1337;

const tableCreate =  async () =>  {
    await models.User.sync({ force: true})
    await models.Page.sync({force : true})
}


app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
  
  tableCreate()
