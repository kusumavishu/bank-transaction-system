require("dotenv").config();
require("./config/db.js").connectDB();

const path = require("path");

const app = require("./app");

/** View engine */
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Server listen
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
