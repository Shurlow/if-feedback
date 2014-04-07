var express = require( 'express' )

var app = express()
app.set('view engine', 'hjs')

app.get('/', function(req, res) {
	res.render('index.hjs')
})
app.listen(3000)