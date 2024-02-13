require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 4000;



// connection string to database:Mongoose
mongoose.connect('mongodb://localhost:27017/MainProject2', { 
     // useNewUrlParser: true, 
     // useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
     console.log('Connected to MongoDB');
});


// Middleware
app.use(express.json())


//controllers
app.use('/travel', require('./controllers/travel'));


// connecting backend to frontend(jcjeztravel)
app.get('/travel', (req, res) => {
     // Logic to fetch data from database
     // assuming /travel/data is the route in jcjeztravel that will receive this request
     const data = [
          // example data, need to add real data here
          // name: { type: String, require: true },
          // pic: String,
          // city: { type: String, require: true },
          // time: Number,
          // departure: Number,
          // price: Number
          { id: 1, name: 'Example Data 1' },
          { id: 2, name: 'Example Data 2' }
     ];
     res.json(data);
});

// Start server
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});
