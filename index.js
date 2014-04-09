var express = require( 'express' )
var feedbackDB = require( './fbLevel' )

var app = express()
app.set('view engine', 'hjs')
app.use( express.logger('dev') )
app.use(express.json())
app.use(express.static(__dirname + '/public'));



app.get('/', function(req, res) {
	feedbackDB.getDBVals(function(bundle) {
		console.log(bundle)
		res.render('index.hjs', {array: bundle})
	})
	
})


app.post('/', function(req, res) {
  feedbackDB.addToDB(req.body.key, req.body.value)
  res.end('added input to DB')
})


app.listen(3000)
console.log('Im on port 3000')

