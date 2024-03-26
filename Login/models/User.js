import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullname : {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 8
  }
})
const User =mongoose.model('User', UserSchema)

export default User;