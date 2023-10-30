// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const registerUser = async (req, res) => {
//   try {
//     // Extract user information from the request body
//     const {
//       name,
//       family_name,
//       age,
//       email,
//       password,
//       profile_picture,
//       center_of_interest,
//     } = req.body;

//     // Check if the email is already in use
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: 'Email is already registered' });
//     }

//     // Hash the user's password
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     // Create a new user instance
//     const newUser = new User({
//       name,
//       family_name,
//       age,
//       email,
//       password: hashedPassword, // Store the hashed password
//       profile_picture,
//       center_of_interest,
//     });

//     // Save the new user to the database
//     const savedUser = await newUser.save();

//     res.status(201).json(savedUser);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = registerUser;
