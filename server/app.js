// ./express-server/app.js
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import keys from "./config/keys";

// import routes
import addUser from '../server/routes/user.server.route'
import addInterest from "../server/routes/skills.server.route";
import findUserBySkill from "../server/routes/user.server.route";

// define our app using express
const app = express();

// allow-cors
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
	next();
});

// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

// set the port
const port = process.env.PORT || 3001;

// connect to database
const db = keys.mongoURI;
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// add Source Map Support
SourceMapSupport.install();

app.use('/api/user', addUser);
app.use('/api/user', findUserBySkill);
app.use('/api/interest', addInterest);

app.use('/', (req, res) => {
    res.send({ express : 'Api working'});
});
// catch 404
app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});
// start the server
app.listen(port,() => {
    console.log(`Server running on port: ${port}`);
});

export { app, db };