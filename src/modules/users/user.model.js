const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required for creating an account"],
    },

    email: {
      type: String,
      required: [true, "Email is required for creating a user"],
      trim: true,
      lowercase: true,
      unique: [true, "Email already exists."],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password should contain at least 6 characters"],
      select: false,
    },

    systemUser: {
      type: Boolean,
      default: false,
      immutable: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

// 🔐 Hash password automatically
userSchema.pre("save", async function () {
  // try {
    if (!this.isModified("password")) {
      return;
    }
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  // } catch (error) {
  //   next(error);
  // }
});

// 🔑 Password comparison method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
