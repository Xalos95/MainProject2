require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 4000;



// connection string to database:Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => {
          console.log('Connected to MongoDB');
          // Start the server
          app.listen(process.env.PORT, () => {
               console.log(`Server is running on port ${process.env.PORT}`);
          });
     })
     .catch(err => {
          console.error('Error connecting to MongoDB:', err.message);
     });


// Middleware
app.use(express.json())







//controllers
app.use('/travel', require('./controllers/travel'));

// Start server
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});
