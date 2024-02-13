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

// Start server
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});
