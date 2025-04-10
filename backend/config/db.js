// const mongoose = require("mongoose");
// // database connectivity
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (err) {
//     console.error("Failed to connect to MongoDB", err);
//     process.exit(1); // Exit process on failure
//   }
// };

// module.exports = connectDB;




import mongoose from 'mongoose';

// Database connectivity
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;
