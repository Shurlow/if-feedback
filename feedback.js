var express = require( 'express' )
var level = require( 'level' )

var db = level('./mydb')

var app = express()
app.set('view engine', 'hjs')
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
	res.render('index.hjs', feed)
})
app.listen(3000)
console.log('im on port 3000')




var addToDB = function(key, val) {
	db.put(key, val, function (err) {
		if (err) return console.log('Ooops!', err)
		// console.log('added it to DB')
	})
}

var getFromDB = function(key) {
	db.get('name', function (err, value) {
		if (err) return console.log('Ooops!', err)
		console.log(value)
	})

}

var viewDB = function() {
	console.log(db)
}

addToDB('fuck', 'my lyfe')
getFromDB('fuck')





var feed = {

	title: 'IF FEEDBACK',
	head: 'What are people saying about IF?',
	
}