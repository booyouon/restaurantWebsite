const mongoose = require('mongoose');
const review = require('./models/reviews');

mongoose.connect('mongodb://localhost:27017/thekikibar', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongo connection open");
    })
    .catch(err => {
        console.log("mongo error");
        console.log(err);
    });

const userReviews = [
    {
        name:'booyouon',
        comment:'Best drinks ever!'
    },
    {
        name:'Luna',
        comment:'It was okay.'
    },
    {
        name:'NotKiki',
        comment:'AMAZING WOW GOOOD GREAT AMAZING 10/10'
    },
    {
        name:'redSpiderLily',
        comment:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    }
]

const clearDB = async () => {
    await review.deleteMany({});
}

clearDB().then(() => {
    review.insertMany(userReviews)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
        .then(()=> {
        mongoose.connection.close();
        });
})
