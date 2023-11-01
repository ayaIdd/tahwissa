const mongoose = require('mongoose')


const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100, // Adjust the maximum length as needed
  },
  content: {
    type: String,
    required: true,
  },
  author_name: {
    type: String,
    required: true,
  },
  publication_date: {
    type: Date,
    default: Date.now, // Set the default date to the current date and time
  },


});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
