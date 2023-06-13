const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressSession = require('express-session')
const flash = require('connect-flash')
const cors = require('cors')
require("dotenv").config();

app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(cors())

// call routes
const users = require('./routes/users');

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: false,
    })
    .then(() => console.log("Connect database success"))
    .catch((error) => console.log(error))

app.use(users)


const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server Connect in port ${port}`);
})