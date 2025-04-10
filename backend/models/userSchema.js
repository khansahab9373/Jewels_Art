// const mongoose = require("mongoose");
// // database structure
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   phone: String,
//   dob: Date,
//   password: { type: String, required: true },
// });

// const User = mongoose.model("User", userSchema);
// module.exports = User;




import mongoose from 'mongoose';

// Database structure
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  dob: Date,
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
