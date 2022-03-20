const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require('./config/db');

const blogRoute = require('./routes/blog');
const userRoute = require('./routes/user');

const app = express();

connectDB();

//Middle ware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//Cors
if(process.env.NODE_ENV === 'development'){
    app.use(cors({origin:`${process.env.CLIENT_URL}`}));
}


//Routes
app.get('/',(req, res)=>{
    res.send("Hello Express");
});

app.use('/api', blogRoute);
app.use('/api/user', userRoute);


port = process.env.PORT || 8000


app.listen(port, ()=>{
    console.log(`Server start port ${port}`)
});

