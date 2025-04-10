// const bcrypt = require("bcrypt");
// const User = require("../models/userSchema");
// // store processes and receives data
// // Function to create a new user
// const createUser = async (userData) => {
//   const hashedPassword = await bcrypt.hash(userData.password, 10); // Hash the password
//   const newUser = new User({ ...userData, password: hashedPassword }); // Create a new user instance
//   return await newUser.save(); // Save the user to the database
// };

// // Function to find a user by email
// const getUserByEmail = async (email) => {
//   return await User.findOne({ email }); // Find user in the database by email
// };

// // Combined exports
// module.exports = { createUser, getUserByEmail };


import bcrypt from 'bcrypt';
import User from '../models/userSchema.js';

// Function to create a new user
const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10); // Hash the password
  const newUser = new User({ ...userData, password: hashedPassword }); // Create a new user instance
  return await newUser.save(); // Save the user to the database
};

// Function to find a user by email
const getUserByEmail = async (email) => {
  return await User.findOne({ email }); // Find user in the database by email
};

// Combined exports
export { createUser, getUserByEmail };
