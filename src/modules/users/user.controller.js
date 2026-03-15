const User = require("./user.model");

module.exports = {
  createUser: async (req, res, next) => {
    try {
      // const user = await User.create(req.body);

      res.status(201).json({
        success: true,
        message: "DONE",
      });
    } catch (error) {
      next(error);
    }
  },

  getUsers: async (req, res, next) => {
    try {
      // const users = await User.find();

      res.json({
        success: true,
        message: "Siri Love you",
      });
    } catch (error) {
      next(error);
    }
  },

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
