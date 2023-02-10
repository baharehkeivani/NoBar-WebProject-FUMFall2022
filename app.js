// process.env.NODE_ENV = '';
const express = require('express');
const app = express();
var http = require('http');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose'); 
// const config = require('config');
// const cookieParser = require('cookie-parser')
// const cors = require('cors')

//ejs
app.set('views' , './views')
app.set('view engine' , 'ejs')


app.use(express.static(__dirname + '/views'));

// app.use(bodyParser.urlencoded({ extended : false }));
// app.use(bodyParser.json({ type : 'application/json' }));
// app.use(cookieParser());
// app.use(cors({
//     origin: '*',
//     allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'], 
//     credentials: true, 
//     maxAge: 600, 
//     exposedHeaders: ['*', 'Authorization' ] 
// }));
// app.use('/public' , express.static('public'))

// const v1 = require('./v1/version1')
// initializing app routes
const home = require('./routes/home');
const admin = require('./routes/admin');

app.use('/admin', admin);
app.use('/', home);

// app.listen(4000 , () => {
//     console.log(`Server running at Port 4000`)
// });

var port = '3000';
app.set('port', port);
var server = http.createServer(app);
server.listen(port);

module.exports = app;

