// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     minlength: 2,
//     maxlength: 50,
//   },
//   family_name: {
//     type: String,
//     required: true,
//     minlength: 2,
//     maxlength: 50,
//   },
//   age: {
//     type: Number,
//     min: 0,
//   },
//   email: {
//     type: String,
//     required: true,
//     maxlength: 50,
//     unique: true,
//     // Add email format validation (regex) here
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 5,
//     // You should handle password hashing in your application logic
//   },
//   profile_picture: {
//     type: String,
//     default:"",
//     // Add URL validation (regex) here
//   },
//   center_of_interest: [String],
//   places_liked: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Places',
//   }],
//   comments: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Comments',
//   }],
//   friends: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Users',
//   }],
//   posts: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Posts',
//   }],
//   stories: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'UserStories',
//   }],
// } , {timestamps: true }

// );

// const User = mongoose.model('Users', userSchema);

// module.exports = User;
