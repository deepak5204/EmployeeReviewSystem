
const mongoose = require('mongoose');

try {
     mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('DB connected successfully!');   
  } catch (error) {
        console.log(error);
    
  }

