var level = require( 'level' )
var db = level('./mydb')
var concat = require('concat-stream')

var fbdb = exports;

fbdb.addToDB = function(key, val) {
	db.put(key, val, function (err) {
		if (err) return console.log('Ooops!', err)
	})
}

fbdb.getFromDB = function(key) {
	db.get(key, function (err, value) {
		if (err) return console.log('Woah!', err)	
		console.log(value)

	})

}

fbdb.getDBVals = function(cb) {

	db.createReadStream({ reverse: true }).pipe(concat(function(bundle){
		cb(bundle)
	
	}))
		
}

