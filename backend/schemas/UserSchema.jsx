const { Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6
    }
  },
  {
    timestamps: true
  }
);

module.exports = { UserSchema };
