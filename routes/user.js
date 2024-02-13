const router = require('express').Router()


app.get('/', (req, res) => {
     res.send('Home Page');
});

app.get('*', (req, res) => {
     res.status(404).send('<h1>404 Page</h1>');
});

router.get('/', (req, res) => {
     res.send('GET /places stub')
})

router.post('/', (req, res) => {
     res.send('POST /places stub')
})


module.exports = router
