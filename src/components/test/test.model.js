const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
  message: String,
});


module.exports = mongoose.model('Test', testSchema);
