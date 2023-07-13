const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv").config();

app.use(express.json())
app.use(express.urlencoded())

app.use(cors())

// call routes
const users = require('./routes/users');
const authRoute = require('./routes/auth');
const eventsRoute = require('./routes/events');
const adminRoute = require('./routes/admin');
const { requireAdmin } = require("./controllers/authController");

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: false,
    })
    .then(() => console.log("Connect database success"))
    .catch((error) => console.log(error))


app.use(users)
app.use(authRoute)
app.use('/api', eventsRoute)
app.use('/admin', requireAdmin,adminRoute)




const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server Connect in port ${port}`);
})