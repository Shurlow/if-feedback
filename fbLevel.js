var level = require( 'level' )
var db = level('./mydb', { valueEncoding: 'json' })
var concat = require('concat-stream')

var fbdb = exports;

var dbData = {
		time: 'now'
	, text: 'this sux'
	, feedback: 'Okay'
}

fbdb.addToDB = function(key, val) {
	db.put('theKey', dbData, function (err) {
		if (err) return console.log('Ooops!', err)
	})
}

fbdb.getVal = function(key, cb) {
	db.get(key, function (err, value) {
		if (err) return console.log('Woah!', err)	
		cb(value)

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

// fbdb.getAll = function(cb) {

// 	db.createReadStream()
// 		.on('data', function(data){
// 		cb(data)
// 	})
// 	// .pipe(concat(function(bundle){
// 	// 	cb(bundle)
// 	// })){ reverse: true }
// 	.on('error', function(err){
// 		console.error("Damn", err)
// 	})
		
// }

fbdb.getValues = function(cb){

	db.createReadStream()
  .on('data', function (data) {
    console.log(data.key, '=', data.value)
  })
  .on('error', function (err) {
    console.log('Oh my!', err)
  })
  .on('close', function () {
    console.log('Stream closed')
  })
  .on('end', function () {
    console.log('Stream closed')
  })

}




fbdb.flushDB = function(cb){
	db.createReadStream()
		.on('data', function(data){
			db.del(data.key)
			cb(data)
		})
}

