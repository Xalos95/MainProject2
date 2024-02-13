const router = require('express').Router();
const bodyParser = require('body-parser');
const db = require('../models');
router.use(bodyParser.urlencoded({ extended: true }));


// homepage
router.get('/', (req, res) => {
    db.Travel.find
    .then(() => {
        res.send('Travel route');
    })
    .catch (err => {
        console.log(error);
        res.render('error404')
    });
});

// GET request to /travel/:name -->SHOW
router.get('/:name', (req, res) => {
    const id = req.params.name;
    res.send(`Travel details for country ${name}`);
});

// POST request to /travel
router.post('/', (req, res) => {
    const data = req.body;
    // Process the request data
    res.send('Travel route - POST');
});


// login page/user signup


router.get('/', (req, res) => {
    res.send('<form action="/login" method="post">' +
        '  <label for="username">Username:</label>' +
        '  <input type="text" id="username" name="username"><br>' +
        '  <label for="password">Password:</label>' +
        '  <input type="password" id="password" name="password"><br>' +
        '  <input type="submit" value="Login">' +
        '</form>');
});

router.post('/', (req, res) => {
    const { username, password } = req.body;
    // Here you can validate the username and password
    // If they are valid, redirect to receipt page
    if (username === 'user' && password === 'pass') {
        res.redirect('/receipt');
    } else {
        res.send('Invalid credentials. <a href="/login">Try again</a>');
    }
});


router.get('/', (req, res) => {
    res.send('Congratulations! You have successfully logged in. Here is your receipt.');
});



module.exports = router;
