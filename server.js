const express = require('express');
const dotenv = require('dotenv').config({path: './config/.env'});
const ejs = require('ejs');

const db_connection = require('./config/db.config');
const file_router = require('./router/file.router');
const app = express();


db_connection();
app.set("view engine", "ejs");
app.use('/file', file_router);




app.listen(process.env.PORT, () => console.log(`server is in ${process.env.NODE_ENV} at ${process.env.PORT}`));