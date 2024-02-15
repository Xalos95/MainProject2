const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
     try {
          await mongoose.createConnection(uri
               , {
               useNewUrlParser: true,
               useUnifiedTopology: true
          }
          );
          console.log('MongoDB Connected');
     } catch (error) {
          console.error('Error connecting to MongoDB:', error.message);
     }
};

module.exports = connectDB;
