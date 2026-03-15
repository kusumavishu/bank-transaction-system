const { ZodError } = require("zod");

const zodValidator = (schema, source = "body") => {
  return (req, res, next) => {
    try {
      const data = schema.parse(req[source] || {});

      // replace request data with validated / transformed data
      Object.assign(req[source], data);

      next();
    } catch (err) {
      // if (err instanceof ZodError) {
      //   const formattedErrors = {};

      //   err.issues.forEach((e) => {
      //     const field = e.path.join(".");

      //     // ✅ keep only FIRST error per field
      //     if (!formattedErrors[field]) {
      //       formattedErrors[field] = e.message;
      //     }
      //   });

      //   return res.status(400).json({
      //     success: false,
      //     message: "Validation failed",
      //     errors: Object.entries(formattedErrors).map(([field, message]) => ({
      //       field,
      //       message,
      //     })),
      //   });
      // }
      if (err instanceof ZodError) {
        // ✅ Get first error only
        const firstError = err.issues[0];

        return res.status(400).json({
          success: false,
          message: firstError.message, // ✅ direct message
        });
      }

      next(err);
    }
  };
};

module.exports = zodValidator;
