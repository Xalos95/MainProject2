require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;
const connectDB = require('./db')
// const uri = 'mongodb+srv://josemanzano87:Snsd43ver!@cluster0.iwlsu27.mongodb.net/?retryWrites=true&w=majority';


// connection string to database:Mongoose
// mongoose.connect('mongodb://localhost:27017/MainProject2', { 
//      // useNewUrlParser: true, 
//      // useUnifiedTopology: true 
// });

// mongoose.connect('mongodb+srv://josemanzano87:Snsd43ver%21@cluster0.iwlsu27.mongodb.net/?retryWrites=true&w=majority'
//      , 
//      { useNewUrlParser: true, useUnifiedTopology: true }
//      )
//      .then(() => console.log('Connected to MongoDB'))
//      .catch(err => console.error('Error connecting to MongoDB:', err));

// connect to MongoDb
connectDB();

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
