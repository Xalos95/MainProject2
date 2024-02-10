require('dotenv').config();
const router = require('express').Router();
const db = require('../modles')
const app = express();



// Controllers & Routes
app.use('/travel', require('./controllers/travel'));

app.get('/', (req, res) => {
     res.send('Home Page');
});

app.get('*', (req, res) => {
     res.status(404).send('<h1>404 Page</h1>');
});

router.get('/', (req.res) => {
     res.send('GET /places stub')
})

router.post('/', (req.res) => {
     res.send('POST /places stub')
})

//calls databse
router.get('/', (req,res) => {
     db.Place.find()
     .then((places) => {
          res.render('places/index', { places })
     })
     .catch(err => {
          console.log(err)
          res.render('error404')
     })
})
app.listen(process.env.PORT);
