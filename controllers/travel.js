const router = require('express').Router();
const db = require('../models');




// homepage
router.get('/', (req, res) => {
    res.send('Travel route');
});

// GET request to /travel/:name -->SHOW
router.get('/:id', (req, res) => {
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
router.get('/login', (req, res) => {
    res.render('travel/login');
});







module.exports = router;
