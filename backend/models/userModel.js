const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please fill name field"],
    },
    email: {
      type: String,
      required: [true, "Please fill email field"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please fill in the field"],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
