const router = require('express').Router();



router.get('/', (req, res) => {
     res.send('GET /places stub')
})

router.post('/', (req, res) => {
     res.send('POST /places stub')
})


module.exports = router
