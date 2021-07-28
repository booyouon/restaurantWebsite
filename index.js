const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/thekikibar', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongo connection open");
    })
    .catch(err => {
        console.log("mongo error");
        console.log(err);
    }); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`listening on ${port}`);
})

app.get('/', (req, res) => {
    res.render('index');
})