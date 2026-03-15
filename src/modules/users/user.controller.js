const User = require("./user.model");

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          success: false,
          errors: {
            email: "Email already registered",
          },
        });
      }

      const user = await User.create({
        name,
        email,
        password,
      });

      return res.status(201).json({
        success: true,
        message: "User registered successfully 🎉",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.log("error",error)
      return res.status(400).json({
        success: false,
        message: error.message,
      });
      // return res.render("register", {
      //   error: err.message,
      // });
    }
  },

  //all get
  // getUsers: async (req, res, next) => {
  //   try {
  //     // const users = await User.find();
  //     await res.render("register");
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  getUserById: async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);

      res.json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },
};
