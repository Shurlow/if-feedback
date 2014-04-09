var level = require( 'level' )
var db = level('./mydb')

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

fbdb.getDBKeys = function() {

	db.createReadStream()
		.on('data', function (data) {
			console.log(data.key)
		})
		.on('error', function (err) {
			console.log('Oh my!', err)
		})
}

