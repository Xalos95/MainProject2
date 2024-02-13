const router = require('express').Router();




// GET request to /travel
router.get('/', (req, res) => {
    res.send('Travel route');
});

// GET request to /travel/:id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Travel details for ID ${id}`);
});

// POST request to /travel
router.post('/', (req, res) => {
    const data = req.body;
    // Process the request data
    res.send('Travel route - POST');
});




module.exports = router;
