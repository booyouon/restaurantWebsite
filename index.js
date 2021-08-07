const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { default: fetch } = require('node-fetch');
const mongoose = require('mongoose');
const { response } = require('express');
const ejsMate = require('ejs-mate');
const reviews = require('./models/reviews');

mongoose.connect('mongodb://localhost:27017/thekikibar', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongo connection open");
    })
    .catch(err => {
        console.log("mongo error");
        console.log(err);
    });

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free'));

app.listen(port, () => {
    console.log(`listening on ${port}`);
})

app.get('/', async (req, res) => {
    const punkapi = await fetch('https://api.punkapi.com/v2/beers');
    const data = await punkapi.json();
    const review = await reviews.find({});
    res.render('index', { data, review });
})

app.use((req,res) => {
    res.status(404).send('Page not found');
})