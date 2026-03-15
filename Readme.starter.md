# Create A Project 
mkdir <project-name>
cd <project-name>
npm init -y; npm install express cors dotenv; npm install -D nodemon

# setup folder structure (Layer-Based Architecture)
project-root
│
├── src
│   ├── config
│   │   ├── dbConnect.js
│   │   └── sessionConfig.js
|   |
│   ├── controllers
|   |
│   ├── middlewares
│   │   ├── errorHandler.js
│   │   └── requestLogger.js
|   |
│   ├── models
|   |
│   ├── routes
|   |
│   ├── app.js
│   ├── server.js
│
├── .env
├── package.json

# package.json

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "npx nodemon src/server.js",                        // for development 
    "start": "node src/server.js"                              // for production
  },

# app && server 
import express on app.js // code 
import app.js on server.js // listen code

# connect to mongoDB
npm i mongoose
config DB connection by mongoose.connect()

# create a models

# chnages to Layer-Based Architecture -- > Module-Based Architecture

src
 ├── modules
 │   ├── auth
 │   ├── users
 │   ├── accounts
 │   └── transactions
 ├── middlewares
 ├── config
 ├── utils
 ├── app.js
 └── server.js


 # for validation 
 npm install zod