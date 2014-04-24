var level = require( 'level' )
var db = level('./mydb')
var concat = require('concat-stream')

var fbdb = exports;

fbdb.addToDB = function(key, val) {
	db.put(key, val, function (err) {
		if (err) return console.log('Ooops!', err)
	})
}

fbdb.getVal = function(key) {
	db.get(key, function (err, value) {
		if (err) return console.log('Woah!', err)	
		console.log(value)

	})

}

// fbdb.getKey = function(val, cb){
// 	db.createReadStream({ reverse: true }).on('data', function(data){
// 		if(data.value === val){
// 			db.put(data.key, data.value, function(err){
// 				if (err) return console.log('Uh oh!', err)
// 			})
// 			console.log(data.key, '=', data.value)
// 			// cb(data)
// 		}
// 	})

// }

fbdb.getAll = function(cb) {

	db.createReadStream({ reverse: true })
	.pipe(concat(function(bundle){
		cb(bundle)
	}))
		
}

fbdb.flushDB = function(cb){
	db.createReadStream()
		.on('data', function(data){
			db.del(data.key)
			cb(data)
		})
}

