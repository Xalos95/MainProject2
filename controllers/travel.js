const router = require('express').Router();
const bodyParser = require('body-parser');
const traveldb = require('../models');
router.use(bodyParser.urlencoded({ extended: true }));

// fetch data from MongoDB
router.get ('/data', async (req, res) => {
    try {
        const data = await traveldb.find();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
})


// homepage
router.get('/', async (req, res) => {
    try {
        res.send('Welcome to the homepage!');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// GET request to /travel/:name --> SHOW
router.get('/travel/:name', async (req, res) => {
    try {
        const name = req.params.name;
        // Here you can fetch travel details for the country with the given name
        // Example: const countryDetails = await Country.findOne({ name });
        // Then send the response with the fetched details
        res.send(`Travel details for country ${name}`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


// POST request to /travel
router.post('/travel', async (req, res) => {
    try {
        const data = req.body;
        // Process the request data asynchronously (e.g., save to database)
        // Example: await Travel.create(data);
        res.send('Travel route - POST');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


// Route for displaying the login form
router.get('/travel/login', async (req, res) => {
    try {
        res.send(`
            <form action="/login" method="post">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"><br>
                <input type="submit" value="Login">
            </form>
        `);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route for handling login form submission
router.post('/travel/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        // Here you can validate the username and password
        // If they are valid, redirect to receipt page
        if (username === 'user' && password === 'pass') {
            res.redirect('/travel/:name/receipt');
        } else {
            res.send('Invalid credentials. <a href="/login">Try again</a>');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route for displaying the receipt page
router.get('/travel/:name/receipt', async (req, res) => {
    try {
        res.send('Congratulations! You have successfully logged in. Here is your receipt.');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = router;
