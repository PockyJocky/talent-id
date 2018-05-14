// ./express-server/app.js
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';

// import routes
import userRoutes from '../server/routes/user.server.route'

// defiene our app using express
const serverConfig = express();

// allow-cors
serverConfig.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

// configure app
serverConfig.use(logger('dev'));
serverConfig.use(bodyParser.json());
serverConfig.use(bodyParser.urlencoded({ extended:true }));
serverConfig.use(express.static(path.join(__dirname, 'public')));
// set the port
const port = process.env.PORT || 3001;
// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/27017');

// add Source Map Support
SourceMapSupport.install();

serverConfig.use('/api', userRoutes);
serverConfig.get('/', (req, res) => {
    res.send({ express : 'Api working'});
})
// catch 404
serverConfig.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});
// start the server
serverConfig.listen(port,() => {
    console.log(`App Server Listening at ${port}`);
});

export default serverConfig;