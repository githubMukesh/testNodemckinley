const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  userName: {
    type: String,
    required: [true, 'userName is required']
  },
  emailId: {
    type: String,
    unique: true,
    required: [true, 'emailId is required']
  },
  password: {
      type: String,
      required: [true, 'password is required']
  }

});

 const User = mongoose.model('user', UserSchema);
 module.exports = User;
