## 🔌 Using `connectDB`

You can export and use the database connection in two ways:

---

### ✅ Way 1: Direct Function Export (Recommended)

**db.js**

```js
module.exports = connectDB;
```

**Usage**

```js
const connectDB = require("./config/db");
connectDB();
```

✔ Simple and clean
✔ Best for single function export

---

### ✅ Way 2: Object Export

**db.js**

```js
module.exports = { connectDB };
```

**Usage**

```js
const { connectDB } = require("./config/db");
connectDB();
```

✔ Useful when exporting multiple functions

---

### 🚀 Recommendation

Use **Way 1** for cleaner code unless you need multiple exports.
