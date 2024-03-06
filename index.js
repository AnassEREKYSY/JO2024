const express = require('express');
const app = express();
const coockieParser = require("cookie-parser");

app.use(coockieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);

app.get('/', (req, res) => {
    res.render('templates/athlete/showAllAthletes');
});


