const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "PI_Ad_DB";

// middleware
app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}));

// database connection link to file
//this code links our server to DB

require('./config/mongoose.config')(DB);
// const mongooseConnectionFunc = require('./config/mongoose.config');
// mongooseConnectionFunc(DB)

// connect the routes
require("./routes/routes")(app);


// start the server
app.listen(PORT, () => console.log(`🎈🎈🎈 server up on port:${PORT}`)) 