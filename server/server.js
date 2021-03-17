const express = require('express');
const app = express();
const path = require('./router/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser())

app.use(
    session({
    key: "userid",
    secret: "passowrd12513",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
})
);
app.use('/',path);
app.use('/signup',path);

const port = 3001;
app.listen(port,() => {console.log(`Listening on port ${port}..`)});