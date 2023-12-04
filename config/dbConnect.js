const mongoose = require('mongoose');

module.exports = dbConnect = async () => {
  try {
    const response = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    console.log('database connected...');
  } catch (error) {
    console.log('db not connected');
  }
};
