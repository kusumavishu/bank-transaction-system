// const { z } = require("zod");

// const userValidSchema = z.object({
//   name: z
//     .string({
//       required_error: "Name is required",
//       invalid_type_error: "Name must be a string",
//     })
//     .trim()
//     .min(2, "Name must contain at least 2 characters"),

//   email: z
//     .string({
//       required_error: "Email is required",
//       invalid_type_error: "Email must be a string",
//     })
//     .trim()
//     .toLowerCase()
//     .email("Invalid email format"),

//   password: z
//     .string({
//       required_error: "Password is required",
//       invalid_type_error: "Password must be a string",
//     })
//     .min(6, "Password must be at least 6 characters"),
// });

// module.exports = { userValidSchema };

const { z } = require("zod");

const userValidSchema = z
  .object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // NAME
    if (!data.name || data.name.trim() === "") {
      ctx.addIssue({
        path: ["name"],
        message: "Name is required",
      });
    } else if (data.name.trim().length < 2) {
      ctx.addIssue({
        path: ["name"],
        message: "Name must contain at least 2 characters",
      });
    }

    // EMAIL
    if (!data.email || data.email.trim() === "") {
      ctx.addIssue({
        path: ["email"],
        message: "Email is required",
      });
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      ctx.addIssue({
        path: ["email"],
        message: "Invalid email format",
      });
    }

    // PASSWORD
    if (!data.password) {
      ctx.addIssue({
        path: ["password"],
        message: "Password is required",
      });
    } else if (data.password.length < 6) {
      ctx.addIssue({
        path: ["password"],
        message: "Password must be at least 6 characters",
      });
    }
  });

module.exports = { userValidSchema };
