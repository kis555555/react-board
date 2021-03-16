const express = require('express');
const app = express();
const path = require('./router/index');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/',path);
app.use('/signup',path);

const port = 3001;
app.listen(port,() => {console.log(`Listening on port ${port}..`)});