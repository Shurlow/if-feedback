var express = require( 'express' )
var feedbackDB = require( './fbLevel' )

var app = express()
app.set('view engine', 'hjs')
app.use( express.logger('dev') )
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
	res.render('index.hjs')
})
app.listen(3000)
console.log('im on port 3000')


// feedbackDB.addToDB('Cat', 'Bigger Dog')
// feedbackDB.addToDB('Fish', 'Shark')
// feedbackDB.addToDB('Ant', 'Ladybug')
// feedbackDB.viewDB() 