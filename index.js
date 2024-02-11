const express = require("express")
const db = require('./models')
const app = express();


app.get("/")

//config
require('dotenv').config();



//controllers
app.use('/travel', require('./controllers/travel'));



app.listen(process.env.PORT);
