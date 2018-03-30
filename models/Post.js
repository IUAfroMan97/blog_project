var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
      type: String,
      required: true
  },
  content: {
      type: String,
      required: true
  },
  created_at: {
      type: Date,
      required: true,
      default: new Date()
  }
});

module.exports = mongoose.model('Post', PostSchema);