const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /travel')
})


// Show page for travel details to client
router.get('/:id', (req, res) => {
    res.render('travel/show')
})

module.exports = router
