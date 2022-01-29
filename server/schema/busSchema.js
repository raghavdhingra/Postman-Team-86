const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const busSchema = Schema({
  busNumber: {
    type: String,
    required: true,
    unique: true,
  },
  busStations: [String],
});

busSchema.plugin(uniqueValidator);

module.exports = mongoose.model('busdetail', busSchema);
