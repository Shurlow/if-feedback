var level = require( 'level' )
var db = level('./mydb')

var fbdb = exports;

fbdb.addToDB = function(key, val) {
	db.put(key, val, function (err) {
		if (err) return console.log('Ooops!', err)
		// console.log('added it to DB')
	})
}

fbdb.getFromDB = function(key) {
	db.get(key, function (err, value) {
		if (err) return console.log('Woah!', err)
		console.log(value)
	})

}

fbdb.viewDB = function() {

	db.createReadStream()
		.on('data', function (data) {
			console.log(data.key, '=', data.value)
		})
		.on('error', function (err) {
			console.log('Oh my!', err)
		})
}

