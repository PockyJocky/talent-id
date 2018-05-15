// ./express-server/app.js
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import keys from "./config/keys";

// import routes
import userRoutes from '../server/routes/user.server.route'

// define our app using express
const app = express();

// allow-cors
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname, 'public')));

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

app.use('/api/user', userRoutes);
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