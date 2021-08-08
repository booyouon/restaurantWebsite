const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { default: fetch } = require('node-fetch');
const mongoose = require('mongoose');
const { response } = require('express');
const ejsMate = require('ejs-mate');
const reviews = require('./models/reviews');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/thekikibar', {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})
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

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
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

app.post('/', async (req,res) => {
    const newReview = await new reviews(req.body);
    await newReview.save();
    console.log(newReview);
    res.redirect('/');
})

app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const review = await reviews.findByIdAndUpdate(id, req.body);
    res.redirect('/')
})

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await reviews.findByIdAndDelete(id);
    res.redirect('/')
})

app.use((req,res) => {
    res.status(404).send('Page not found');
})