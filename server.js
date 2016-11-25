var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use( require('./auth'));

app.use(express.static( __dirname + '/assets'));
app.use(express.static( __dirname + '/templates'));

app.use('/api/posts',  require('./controllers/api/posts'));
app.use('/api/sessions',  require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));



app.get('/', function( req, res ){
	res.sendFile( __dirname + '/layouts/app.html');
})

var server = app.listen( 8888,  function(){
	console.log('server listening on %d', server.address().port)
});

require('./websockets').connect(server);