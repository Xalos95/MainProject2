const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /travel')
})

module.exports = router
