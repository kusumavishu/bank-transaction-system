const { ZodError } = require("zod");

const zodValidator = (schema, source = "body") => {
  return (req, res, next) => {
    console.log("DATA:", req[source]);

    try {
      const data = schema.parse(req[source] || {});

      // replace request data with validated / transformed data
      Object.assign(req[source], data);

      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          // errors: err.issues.map((e) => ({
          //   field: e.path.join("."),
          //   message: e,
          // })),
          errors: err.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        });
      }

      next(err);
    }
  };
};

module.exports = zodValidator;
