// dbConfig.js
const mongoose =require( 'mongoose');

// MongoDB connection URL
const mongoURI = 'mongodb://localhost:27017/personalhealthcare';

// MongoDB connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Other options if needed
};

// Connect to MongoDB
const onnectToMongoose=()=>{
mongoose.connect(mongoURI, options)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
}

module.exports =  onnectToMongoose;
