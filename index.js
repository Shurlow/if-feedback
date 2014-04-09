var express = require( 'express' )
var feedbackDB = require( './fbLevel' )

var app = express()
app.set('view engine', 'hjs')
app.use( express.logger('dev') )
app.use(express.json())
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
	res.render('index.hjs')
})

app.post('/', function(req, res) {
  console.log(req.headers)
  console.log(req.body)
  res.end('bitch plz')
})

app.listen(3000)
console.log('im on port 3000')


// feedbackDB.addToDB('Cat', 'Bigger Dog')
// feedbackDB.addToDB('Fish', 'Shark')
// feedbackDB.addToDB('Ant', 'Ladybug')
// feedbackDB.viewDB() 
